import { Schema } from './openapi/v300'
import { Ref, RefStore, isRef } from './openapi/ref';
import * as ts from 'typescript';

type a = {
  test: number;
  test2: string[];
}

function refToName(ref: string): string {
  return ref
}

// function genMembers(properties: { readonly [ name: string ]: Ref | Schema }): TypeElement[] {
//   const members: TypeElement[] = Object.keys(properties).map(name => {
//     const property = properties[name]
    
//     const elem = ts.createPropertySignature([], name, undefined, ts.createKeywordTypeNode(SyntaxKind.NumberKeyword), undefined)
//     // console.log(elem)
//     printNode(elem)
//     return {} as TypeElement
//   })
//   return members
// }

// export function genTypes(schemas: { readonly [ref: string]: Schema }): TypeAliasDeclaration[] {
//   return Object.keys(schemas).map(ref => {
//     const schema = schemas[ref]
//     const name = refToName(ref)
    
//     const members = schema.properties ? genMembers(schema.properties) : []
//     return ts.createTypeAliasDeclaration(
//       [],
//       [],
//       name,
//       [],
//       ts.createTypeLiteralNode(members)
//     )
//   })
// }


async function genMembers(refStore: RefStore, properties: { readonly [ name: string ]: Ref | Schema }): Promise<ts.TypeElement[]> {
  // eslint-disable-next-line @typescript-eslint/require-await
  const members: ts.TypeElement[] = await Promise.all(Object.keys(properties).map(async (name) => {
    const property = properties[name]
    let type
    console.log(name)
    if (isRef(property)) {
      type = ts.createTypeReferenceNode(refToName(property.$ref), undefined)
    } else {
      switch(property.type) {
        case 'number': 
          type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
          break;
        case 'integer': 
          type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
          break;
        case 'array':
          console.log('yeah')
          type = ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword))
          break;
        case 'string':
          type = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          break;
      }
    }
    const elem = ts.createPropertySignature([], name, undefined, type, undefined)
    return elem
  }))
  return members
}

export async function genTypes(refStore: RefStore, schemas: { readonly [ref: string]: Schema }): Promise<ts.Statement[]> {
  return Promise.all(Object.keys(schemas).map(async ref => {
    const schema = schemas[ref]
    const name = refToName(ref)
    const members = schema.properties ? await genMembers(refStore, schema.properties) : []
        
    return ts.createTypeAliasDeclaration([], [], name, undefined, ts.createTypeLiteralNode(members))
  }))
}
