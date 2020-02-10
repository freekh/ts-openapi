import * as ts from "typescript";

/*******************************************************
 * Various TS AST helpers to avoid (too) messy code
 *******************************************************/
const EndpointName = "Endpoint";
const PathsName = "Paths";
const OnlyBodyOrFullResponseShortName = "OBFR";
const PathsTypeShortName = "P";
const PathsVariableShortName = "p";
const ResponseTypeParameterName = "Response";
const OnlyBodyOrFullResponseName = "OnlyBodyOrFullResponse";
const OnlyBodyName = "OnlyBody";
const AllPathsName = "allPaths";

export function delareTypeLiteralAlias(
  name: string,
  fields: { [name: string]: ts.TypeNode }
): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.createTypeLiteralNode(
      Object.keys(fields).map(name => {
        const type = fields[name];
        return ts.createPropertySignature(
          undefined,
          name,
          undefined,
          type,
          undefined
        );
      })
    )
  );
}

export function createStringLitralType(name: string): ts.LiteralTypeNode {
  return ts.createLiteralTypeNode(ts.createStringLiteral(name));
}

export function createTypeReference(name: string): ts.TypeReferenceNode {
  return ts.createTypeReferenceNode(name, undefined);
}

function declareStringLiteralUnion(
  name: string,
  values: string[]
): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.createUnionTypeNode(values.map(createStringLitralType))
  );
}

function declareConditionalNeverType(
  typeRef: ts.TypeReferenceNode,
  conditionals: { left: ts.TypeNode; right: ts.TypeNode }[]
): ts.TypeNode {
  return conditionals.reverse().reduce((prev, curr) => {
    return ts.createConditionalTypeNode(typeRef, curr.left, curr.right, prev);
  }, ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword) as ts.TypeNode);
}

export type EndpointDef = {
  [method: string]: {
    parameters: { [name: string]: ts.TypeNode };
    responseType: string;
    returns: ts.TypeNode;
    returnHeaders?: ts.TypeNode;
  };
};

function createEndpoint<A>(
  endpointDef: EndpointDef,
  createChild: (
    method: string,
    responseType: string,
    params: ts.ParameterDeclaration[],
    returns: ts.TypeNode
  ) => A
): A[] {
  return Object.keys(endpointDef).map(method => {
    const methodImpl = endpointDef[method];
    const params = Object.keys(methodImpl.parameters).map(param =>
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        param,
        undefined,
        methodImpl.parameters[param]
      )
    );
    return createChild(
      method,
      methodImpl.responseType,
      params,
      methodImpl.returns
    );
  });
}

export function createPathsTypeAlias(endpoints: {
  [path: string]: EndpointDef;
}): ts.TypeAliasDeclaration {
  return declareStringLiteralUnion(PathsName, Object.keys(endpoints));
}

export function createOnlyBodyEndpointTypeNode(
  tsGenIdentifier: ts.Identifier,
  endpoints: {
    [path: string]: EndpointDef;
  }
): ts.TypeNode {
  return declareConditionalNeverType(
    ts.createTypeReferenceNode(PathsTypeShortName, undefined),
    Object.keys(endpoints).map(path => {
      return {
        left: createStringLitralType(path),
        right: createOnlyBodyEndpointTypeLiteral(endpoints[path])
      };
    })
  );
}
export function createFullResponseEndpointTypeNode(
  tsGenIdentifier: ts.Identifier,
  endpoints: {
    [path: string]: EndpointDef;
  },
  responseTypeParameterName: string
): ts.TypeNode {
  return declareConditionalNeverType(
    ts.createTypeReferenceNode(PathsTypeShortName, undefined),
    Object.keys(endpoints).map(path => {
      return {
        left: createStringLitralType(path),
        right: createFullResponseEndpointTypeLiteral(endpoints[path])
      };
    })
  );
}

export function createEndpointTypeAlias(
  tsGenIdentifier: ts.Identifier,
  pathsTypeStmt: ts.TypeAliasDeclaration,
  endpoints: { [path: string]: EndpointDef }
): ts.TypeAliasDeclaration {
  const responseTypeParameterName = ResponseTypeParameterName;
  const typeParameters: ts.TypeParameterDeclaration[] = [
    ts.createTypeParameterDeclaration(responseTypeParameterName),
    ts.createTypeParameterDeclaration(
      OnlyBodyOrFullResponseShortName,
      ts.createTypeReferenceNode(
        onlyBodyOrFullResponseQN(tsGenIdentifier),
        undefined
      )
    ),
    ts.createTypeParameterDeclaration(
      PathsTypeShortName,
      ts.createTypeReferenceNode(pathsTypeStmt.name, undefined)
    )
  ];

  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    EndpointName,
    typeParameters,
    declareConditionalNeverType(
      ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, undefined),
      [
        {
          left: ts.createTypeReferenceNode(
            onlyBodyQN(tsGenIdentifier),
            undefined
          ),
          right: createOnlyBodyEndpointTypeNode(tsGenIdentifier, endpoints)
        },
        {
          left: ts.createTypeReferenceNode(
            fullResponseQN(tsGenIdentifier),
            undefined
          ),
          right: createFullResponseEndpointTypeNode(
            tsGenIdentifier,
            endpoints,
            responseTypeParameterName
          )
        }
      ]
    )
  );
}

function promiseOf(type: ts.TypeNode): ts.TypeReferenceNode {
  return ts.createTypeReferenceNode("Promise", [type]);
}

function onlyBodyType(type: ts.TypeNode): ts.TypeNode {
  return promiseOf(type);
}

export function createOnlyBodyEndpointTypeLiteral(
  endpointDef: EndpointDef
): ts.TypeLiteralNode {
  return ts.createTypeLiteralNode(
    createEndpoint(endpointDef, (method, _, params, type) =>
      ts.createPropertySignature(
        undefined,
        method,
        undefined,
        ts.createFunctionTypeNode(undefined, params, onlyBodyType(type)),
        undefined
      )
    )
  );
}

function fullResponseType(
  type: ts.TypeNode,
  returnHeaders?: ts.TypeNode
): ts.TypeNode {
  const headerPS = returnHeaders
    ? [
        ts.createPropertySignature(
          undefined,
          "headers",
          undefined,
          returnHeaders,
          undefined
        )
      ]
    : [
        ts.createPropertySignature(
          undefined,
          "headers",
          undefined,
          ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword),
          undefined
        )
      ];
  return promiseOf(
    ts.createTypeLiteralNode(
      [
        ts.createPropertySignature(
          undefined,
          "response",
          undefined,
          ts.createTypeReferenceNode(ResponseTypeParameterName, []),
          undefined
        ),
        ts.createPropertySignature(
          undefined,
          "data",
          undefined,
          type,
          undefined
        )
      ].concat(headerPS)
    )
  );
}

export function createFullResponseEndpointTypeLiteral(
  endpointDef: EndpointDef
): ts.TypeLiteralNode {
  return ts.createTypeLiteralNode(
    createEndpoint(endpointDef, (method, _, params, type) =>
      ts.createPropertySignature(
        undefined,
        method,
        undefined,
        ts.createFunctionTypeNode(
          undefined,
          params,
          fullResponseType(type, endpointDef[method].returnHeaders)
        ),
        undefined
      )
    )
  );
}

function createConstStatement(
  name: string,
  expr: ts.Expression
): ts.VariableStatement {
  return ts.createVariableStatement(
    undefined,
    ts.createVariableDeclarationList(
      [ts.createVariableDeclaration(name, undefined, expr)],
      ts.NodeFlags.Const
    )
  );
}

export function declareType(
  name: string,
  node: ts.TypeNode
): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    node
  );
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
  const paramAssignments: ts.ShorthandPropertyAssignment[] = [];
  params.forEach(p => {
    if (ts.isIdentifier(p.name)) {
      paramAssignments.push(ts.createShorthandPropertyAssignment(p.name));
    } else {
      throw Error("Expected only identifiers here: " + JSON.stringify(params));
    }
  });
  return ts.createCall(engineProcess, undefined, [
    ts.createCall(
      handleIdentifier,
      undefined,
      [
        ts.createStringLiteral(method) as ts.Expression,
        ts.createStringLiteral(responseType) as ts.Expression,
        pathIdentifier as ts.Expression
      ].concat(ts.createObjectLiteral(paramAssignments))
    )
  ]);
}

function convertTypeDeclarationToRef(
  node: ts.TypeParameterDeclaration
): ts.TypeReferenceNode {
  return ts.createTypeReferenceNode(node.name, undefined);
}

function createEndpointImplementation(
  engineProcess: ts.PropertyAccessExpression,
  handleIdentifier: ts.Identifier,
  endpointDef: EndpointDef,
  responseTypeRef: ts.TypeReferenceNode,
  onlyDataOrFullResponseTypeRef: ts.TypeReferenceNode,
  pathsTypeRef: ts.TypeReferenceNode,
  pathIdentifier: ts.Identifier
): ts.Expression {
  return ts.createAsExpression(
    ts.createObjectLiteral(
      createEndpoint(endpointDef, (method, responseType, params, type) =>
        ts.createPropertyAssignment(
          method,
          ts.createArrowFunction(
            undefined,
            undefined,
            params,
            type,
            undefined,
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
      )
    ),
    ts.createTypeReferenceNode(EndpointName, [
      responseTypeRef,
      onlyDataOrFullResponseTypeRef,
      pathsTypeRef
    ])
  );
}
export function createPaths(
  engineProcess: ts.PropertyAccessExpression,
  tsGenIdentifier: ts.Identifier,
  handleIdentifier: ts.Identifier,
  responseTypeRef: ts.TypeReferenceNode,
  onlyDataOrFullResponseTypeRef: ts.TypeReferenceNode,
  endpointDefs: { [path: string]: EndpointDef },
  endpointDecl: ts.TypeAliasDeclaration
): ts.ArrowFunction {
  const pathTypeParam = ts.createTypeParameterDeclaration(
    PathsTypeShortName,
    ts.createTypeReferenceNode(PathsName, undefined)
  );
  const obfrTypeParam = ts.createTypeParameterDeclaration(
    OnlyBodyOrFullResponseShortName,
    ts.createTypeReferenceNode(
      onlyBodyOrFullResponseQN(tsGenIdentifier),
      undefined
    )
  );
  const pathsTypeRef = convertTypeDeclarationToRef(pathTypeParam);
  const pathIdentifier = ts.createIdentifier(PathsVariableShortName);
  const switchStmt = ts.createBlock([
    ts.createSwitch(
      pathIdentifier,
      ts.createCaseBlock(
        Object.keys(endpointDefs)
          .map(path => {
            return ts.createCaseClause(ts.createStringLiteral(path), [
              ts.createStatement(
                createEndpointImplementation(
                  engineProcess,
                  handleIdentifier,
                  endpointDefs[path],
                  responseTypeRef,
                  onlyDataOrFullResponseTypeRef,
                  pathsTypeRef,
                  pathIdentifier
                )
              )
            ]) as ts.CaseOrDefaultClause;
          })
          .concat(
            ts.createDefaultClause([
              ts.createExpressionStatement(
                ts.createCall(
                  ts.createPropertyAccess(tsGenIdentifier, "unknownPath"),
                  undefined,
                  [
                    ts.createIdentifier(PathsTypeShortName),
                    ts.createIdentifier(AllPathsName)
                  ]
                )
              )
            ])
          )
      )
    )
  ]);
  return ts.createArrowFunction(
    undefined,
    [pathTypeParam, obfrTypeParam],
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        pathIdentifier.text,
        undefined,
        pathsTypeRef
      ),
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        "onlyBodyOrFullResponse",
        undefined,
        ts.createTypeReferenceNode(
          onlyBodyOrFullResponseQN(tsGenIdentifier),
          undefined
        ),
        // TODO: is this or the QualifiedName the right way of accessing OnlyBody
        ts.createPropertyAccess(
          ts.createPropertyAccess(tsGenIdentifier, OnlyBodyOrFullResponseName),
          OnlyBodyName
        )
      )
    ],
    ts.createTypeReferenceNode(endpointDecl.name, [
      ts.createTypeReferenceNode(ResponseTypeParameterName, undefined),
      ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, undefined),
      pathsTypeRef
    ]),
    undefined,
    switchStmt
  );
}

function onlyBodyOrFullResponseQN(engineId: ts.Identifier): ts.QualifiedName {
  return ts.createQualifiedName(engineId, OnlyBodyOrFullResponseName);
}

function onlyBodyQN(engineId: ts.Identifier): ts.QualifiedName {
  return ts.createQualifiedName(
    onlyBodyOrFullResponseQN(engineId),
    OnlyBodyName // TODO: read from engine
  );
}

function fullResponseQN(engineId: ts.Identifier): ts.QualifiedName {
  return ts.createQualifiedName(
    onlyBodyOrFullResponseQN(engineId),
    "FullResponse" // TODO: read from engine
  );
}

export function createApiFunction(
  tsGenIdentifier: ts.Identifier,
  endpointDefs: { [path: string]: EndpointDef },
  endpointDecl: ts.TypeAliasDeclaration
): ts.FunctionDeclaration {
  const engineHandlerTypeDecl = ts.createTypeParameterDeclaration(
    "EngineHandler"
  );
  const responseTypeDecl = ts.createTypeParameterDeclaration(
    ResponseTypeParameterName
  );
  const onlyDataOrFullResponseTypeDecl = ts.createTypeParameterDeclaration(
    OnlyBodyOrFullResponseShortName
  );

  const hostParam = ts.createParameter(
    [],
    [],
    undefined,
    "host",
    undefined,
    ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
  );
  const engineParam = ts.createParameter(
    [],
    [],
    undefined,
    "engine",
    undefined,
    ts.createTypeReferenceNode(
      // TODO: read from engine
      ts.createQualifiedName(tsGenIdentifier, ts.createIdentifier("Engine")),
      [
        convertTypeDeclarationToRef(engineHandlerTypeDecl),
        convertTypeDeclarationToRef(responseTypeDecl)
      ]
    )
  );

  const pathName = "path";

  const pathDeclaration = createConstStatement(
    pathName,
    createPaths(
      // TODO: read from engine
      ts.createPropertyAccess(
        ts.createIdentifier("engine"),
        ts.createIdentifier("process")
      ),
      tsGenIdentifier,
      ts.createIdentifier("handle"),
      convertTypeDeclarationToRef(responseTypeDecl),
      convertTypeDeclarationToRef(onlyDataOrFullResponseTypeDecl),
      endpointDefs,
      endpointDecl
    )
  );
  const apiReturnType = ts.createTypeLiteralNode([
    ts.createPropertySignature(
      undefined, // modifiers
      pathName,
      undefined, // questionToken
      ts.createFunctionTypeNode(
        [
          ts.createTypeParameterDeclaration(
            PathsTypeShortName,
            ts.createTypeReferenceNode(PathsName, []),
            undefined
          ),
          ts.createTypeParameterDeclaration(
            OnlyBodyOrFullResponseShortName,
            ts.createTypeReferenceNode(
              onlyBodyOrFullResponseQN(tsGenIdentifier),
              []
            ),
            ts.createTypeReferenceNode(onlyBodyQN(tsGenIdentifier), [])
          )
        ],
        [],
        ts.createTypeReferenceNode(endpointDecl.name, [
          ts.createTypeReferenceNode(ResponseTypeParameterName, []),
          ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, []),
          ts.createTypeReferenceNode(PathsTypeShortName, [])
        ])
      ),
      undefined
    )
  ]);

  const engineHandlerName = "engineHandler";
  const engineHandlerDeclaration = createConstStatement(
    engineHandlerName,
    ts.createCall(
      ts.createPropertyAccess(ts.createIdentifier("engine"), "init"),
      [],
      [ts.createIdentifier("host")]
    )
  );

  const handleDeclaration = createConstStatement(
    "handler",
    ts.createCall(
      ts.createPropertyAccess(ts.createIdentifier("engine"), "handler"),
      [],
      [ts.createIdentifier(engineHandlerName)]
    )
  );

  return ts.createFunctionDeclaration(
    undefined, // decorators
    undefined, // modifiers
    undefined, // asteriskToken
    "api",
    [engineHandlerTypeDecl, responseTypeDecl],
    [hostParam, engineParam],
    apiReturnType,
    ts.createBlock([
      engineHandlerDeclaration,
      handleDeclaration,
      pathDeclaration,
      ts.createReturn(
        ts.createObjectLiteral([
          ts.createPropertyAssignment(pathName, ts.createIdentifier(pathName))
        ])
      )
    ])
  );
}
