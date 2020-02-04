import * as ts from 'typescript';

/*******************************************************
 * Various TS AST helpers to avoid (too) messy code
 *******************************************************/

export function delareTypeLiteralAlias(name: string, fields: { [name: string]: ts.TypeNode }): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.createTypeLiteralNode(
      Object.keys(fields).map(name => {
        const type = fields[name];
        return ts.createPropertySignature(undefined, name, undefined, type, undefined)
      })
    )
  )
}

export function createStringLitralType(name: string): ts.LiteralTypeNode {
  return ts.createLiteralTypeNode(ts.createStringLiteral(name))
}

export function createTypeRereference(name: string): ts.TypeReferenceNode {
  return ts.createTypeReferenceNode(name, undefined)
}

export function declareStringLiteralUnion(name: string, values: string[]): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.createUnionTypeNode(values.map(createStringLitralType))
  )
}


/**
 * Example:
 * type ApiEndpoint<P extends Paths> =
 *   P extends '/string' ? { get(): string } :
 *   P extends '/number' ? { get(): number} :
 *   never
 *
 * @param name
 * @param typeParameterName
 * @param typeParameterConstraint
 * @param conditionals
 */
export function declareConditionalNeverType(name: string, typeParameterName: string, typeParameterConstraint: ts.TypeAliasDeclaration, conditionals: { left: ts.TypeNode; right: ts.TypeNode }[]): ts.TypeAliasDeclaration {
  const typeParameterRef = createTypeRereference(typeParameterConstraint.name.text)
  const typeParameter = ts.createTypeParameterDeclaration(typeParameterName, typeParameterRef)
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    [typeParameter],
    conditionals.reduce((prev, curr) => {
      return ts.createConditionalTypeNode(createTypeRereference(typeParameterName), curr.left, curr.right, prev)
    },
      ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword) as ts.TypeNode
    )
  )
}

export type EndpointDef = {
  [method: string]: {
    parameters: { [name: string]: ts.TypeNode };
    responseType: string;
    returns: ts.TypeNode;
  };
}

function createEndpoint<A>(endpointDef: EndpointDef, createChild: (method: string, responseType: string, params: ts.ParameterDeclaration[], returns: ts.TypeNode) => A): A[] {
  return Object.keys(endpointDef).map(method => {
    const methodImpl = endpointDef[method]
    const params = Object.keys(methodImpl.parameters).map(param => ts.createParameter(undefined, undefined, undefined, param, undefined, methodImpl.parameters[param]))
    return createChild(method, methodImpl.responseType, params, methodImpl.returns)
  })
}

export function createEndpointType(endpointDef: EndpointDef): ts.TypeLiteralNode {
  return ts.createTypeLiteralNode(createEndpoint(endpointDef, (method, _, params, type) =>
    ts.createPropertySignature(undefined, method, undefined,
      ts.createFunctionTypeNode(undefined, params, type), undefined
    )
  ))
}

function createConstStatement(name: string, expr: ts.Expression): ts.VariableStatement {
  return ts.createVariableStatement(undefined,
    ts.createVariableDeclarationList([
      ts.createVariableDeclaration(
        name,
        undefined,
        expr,
      )
    ], ts.NodeFlags.Const)
  )
}

export function declareType(name: string, node: ts.TypeNode): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, node)
}

function createEngineCall(
  engineProcess: ts.PropertyAccessExpression,
  handleIdentifier: ts.Identifier,
  method: string,
  responseType: string,
  pathIdentifier: ts.Identifier,
  params: ts.ParameterDeclaration[]
): ts.Expression {
  // TODO: how to do filter & map with type narrowing?
  const paramAssignments: ts.ShorthandPropertyAssignment[] = []
  params.forEach(p => {
    if (ts.isIdentifier(p.name)) {
      paramAssignments.push(ts.createShorthandPropertyAssignment(p.name))
    } else {
      throw Error('Expected only identifiers here: ' + JSON.stringify(params))
    }
  })
  return ts.createCall(
    engineProcess,
    undefined,
    [
      ts.createCall(handleIdentifier, undefined, [
        ts.createStringLiteral(method) as ts.Expression,
        ts.createStringLiteral(responseType)  as ts.Expression,
        pathIdentifier as ts.Expression,
      ].concat(ts.createObjectLiteral(paramAssignments))
      )
    ],
  )
}

function convertTypeDeclarationToRef(node: ts.TypeParameterDeclaration): ts.TypeReferenceNode {
  return ts.createTypeReferenceNode(node.name, undefined)
}

function createEndpointImplementation(
  engineProcess: ts.PropertyAccessExpression,
  handleIdentifier: ts.Identifier,
  endpointDef: EndpointDef,
  responseTypeRef: ts.TypeReferenceNode,
  fullResponseOrNotTypeRef: ts.TypeReferenceNode,
  pathsTypeRef: ts.TypeReferenceNode,
  pathIdentifier: ts.Identifier,
): ts.Expression {
  return ts.createAsExpression(ts.createObjectLiteral(
    createEndpoint(endpointDef, (method, responseType, params, type) =>
      ts.createPropertyAssignment(method,
        ts.createArrowFunction(undefined, undefined, params, type, undefined,
          createEngineCall(
            engineProcess,
            handleIdentifier,
            method,
            responseType,
            pathIdentifier,
            params
          )
        )
      )
    )),
    ts.createTypeReferenceNode('Endpoint', [responseTypeRef, fullResponseOrNotTypeRef, pathsTypeRef])
  )
}

export function createPaths(
  engineProcess: ts.PropertyAccessExpression,
  handleIdentifier: ts.Identifier,
  responseTypeRef: ts.TypeReferenceNode,
  fullResponseOrNotTypeRef: ts.TypeReferenceNode,
  endpointDefs: { [path: string]: EndpointDef },
  endpointDecl: ts.TypeAliasDeclaration,
): ts.ArrowFunction {
  const pathTypeParam = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode('Paths', undefined))
  const pathsTypeRef = convertTypeDeclarationToRef(pathTypeParam)
  const pathIdentifier = ts.createIdentifier('p')
  const switchStmt = ts.createBlock([
    ts.createSwitch(pathIdentifier, ts.createCaseBlock(
      Object.keys(endpointDefs).map(path => {
        return ts.createCaseClause(ts.createStringLiteral(path), [
          ts.createStatement(createEndpointImplementation(
            engineProcess,
            handleIdentifier,
            endpointDefs[path],
            responseTypeRef,
            fullResponseOrNotTypeRef,
            pathsTypeRef,
            pathIdentifier
          ))
        ]) as ts.CaseOrDefaultClause
      }).concat(ts.createDefaultClause([]))
    ))
  ])
  return ts.createArrowFunction(
    undefined,
    [pathTypeParam],
    [ts.createParameter(undefined, undefined, undefined, pathIdentifier.text, undefined, pathsTypeRef)],
    ts.createTypeReferenceNode(endpointDecl.name, [pathsTypeRef]),
    undefined,
    switchStmt
  )
}

export function createApiFunction(endpointDefs: { [path: string]: EndpointDef }, endpointDecl: ts.TypeAliasDeclaration): ts.FunctionDeclaration {
  const engineHandlerTypeDecl =  ts.createTypeParameterDeclaration('EngineHandler')
  const responseTypeDecl =  ts.createTypeParameterDeclaration('Response')
  const fullResponseOrNotTypeDecl = ts.createTypeParameterDeclaration('FullResponseOrNot')

  const hostParam = ts.createParameter([], [], undefined, 'host', undefined, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword))


  const pathDeclaration = createConstStatement(
    'path',
    createPaths(
      ts.createPropertyAccess(
        ts.createIdentifier('engine'),
        ts.createIdentifier('process')
      ),
      ts.createIdentifier('handle'),
      convertTypeDeclarationToRef(responseTypeDecl),
      convertTypeDeclarationToRef(fullResponseOrNotTypeDecl),
      endpointDefs,
      endpointDecl
    ),
  )
  //{ path: <P extends Paths, C extends Complete = Complete.Off>(path: P, complete?: C) => Endpoint<Response, C, P> }
  const apiReturnType = ts.createTypeLiteralNode([
    ts.createPropertySignature(undefined, 'path', undefined, undefined, undefined)
  ])

  return ts.createFunctionDeclaration(
    undefined, // decorators
    undefined, // modifiers
    undefined, // asteriskToken
    'api',
    [
      engineHandlerTypeDecl,
      responseTypeDecl
    ],
    [
      hostParam
    ],
    apiReturnType, // type
    ts.createBlock([
      pathDeclaration
    ]),
  )
}
