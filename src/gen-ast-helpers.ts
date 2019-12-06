import * as ts from 'typescript';


/*******************************************************
 * Various TS AST helpers to avoid messy code
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
 * 
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
    body: ts.Statement[];
  };
}

// export function createEndpointType(endpointDef: EndpointDef): ts.TypeLiteralNode {
//   return ts.createTypeLiteralNode(Object.keys(endpointDef).map(method => {
//     return 
//   }))
// }

// export function createEndpointImplementation(endpointDef: EndpointDef): ts.Statement[] {
//   return []
// }
