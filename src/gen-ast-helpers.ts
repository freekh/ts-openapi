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
    returns: ts.TypeNode;
  };
}

function createEndpoint<A>(endpointDef: EndpointDef, createChild: (method: string, params: ts.ParameterDeclaration[], returns: ts.TypeNode) => A): A[] {
  return Object.keys(endpointDef).map(method => {
    const methodImpl = endpointDef[method]
    const params = Object.keys(methodImpl.parameters).map(param => ts.createParameter(undefined, undefined, undefined, param, undefined, methodImpl.parameters[param]))
    return createChild(method, params, methodImpl.returns)
  })
}

export function createEndpointType(endpointDef: EndpointDef): ts.TypeLiteralNode {
  return ts.createTypeLiteralNode(createEndpoint(endpointDef, (method, params, type) =>
    ts.createPropertySignature(undefined, method, undefined,
      ts.createFunctionTypeNode(undefined, params, type), undefined
    )
  ))
}

export function declareType(name: string, node: ts.TypeNode): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, node)
}

function createA(): ts.CallExpression {
  return ts.createCall(ts.createIdentifier('engine'), undefined, undefined)
}

function createEndpointImplementation(endpointDef: EndpointDef): ts.ObjectLiteralExpression {
  return ts.createObjectLiteral(
    createEndpoint(endpointDef, (method, params, type) =>
      ts.createPropertyAssignment(method,
        ts.createArrowFunction(undefined, undefined, params, type, undefined,
          ts.createBlock([
            ts.createStatement(createA())
          ])
        )
      )
    )
  )
}

export function createPaths(endpointDefs: { [path: string]: EndpointDef }, endpointDecl: ts.TypeAliasDeclaration): ts.ArrowFunction {
  const pathTypeParam = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode('Paths', undefined))
  const pathsTypeRef = ts.createTypeReferenceNode(pathTypeParam.name, undefined)
  const pathParam = 'p'
  const switchStmt = ts.createBlock([
    ts.createSwitch(ts.createIdentifier(pathParam), ts.createCaseBlock(
      Object.keys(endpointDefs).map(path => {
        return ts.createCaseClause(ts.createStringLiteral(path), [
          ts.createStatement(createEndpointImplementation(endpointDefs[path]))
        ]) as ts.CaseOrDefaultClause
      }).concat(ts.createDefaultClause([]))
    ))
  ])
  return ts.createArrowFunction(
    undefined,
    [pathTypeParam],
    [ts.createParameter(undefined, undefined, undefined, pathParam, undefined, pathsTypeRef)],
    ts.createTypeReferenceNode(endpointDecl.name, [pathsTypeRef]),
    undefined,
    switchStmt
  )
}


