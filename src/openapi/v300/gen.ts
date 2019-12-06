import { Schema } from './openapi/v300'
import { Ref, isRef } from './openapi/ref';
import * as ts from 'typescript';

function refToName(ref: string): string {
  return ref.split('/').slice(-1)[0]
}

export function schemaToTypeNode(schemaOrRef: Schema | Ref, refs: readonly Ref[]): { unresolved: readonly Ref[]; type: ts.TypeNode } {
  if (isRef(schemaOrRef)) {
    return {
      unresolved: refs.find(({ $ref }) => $ref == schemaOrRef.$ref) ? refs : refs.concat(schemaOrRef),
      type: ts.createTypeReferenceNode(refToName(schemaOrRef.$ref), undefined)
    }
  } else if (schemaOrRef.type == 'object') {
    const properties = schemaOrRef.properties || {}
    const { unresolved: recUnresolved, members } = Object.keys(properties).reduce((prev, name) => {
      const property = properties[name]
      const { unresolved, type } = schemaToTypeNode(property, prev.unresolved)
      return {
        unresolved,
        members: prev.members.concat(ts.createPropertySignature([], name, undefined, type, undefined))
      }
    }, {
      unresolved: refs,
      members: [] as ts.TypeElement[],
    })
    return {
      unresolved: recUnresolved,
      type: ts.createTypeLiteralNode(members)
    }
  } else if (schemaOrRef.type == 'boolean') {
    return {
      unresolved: refs,
      type: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
    }
  } else if (schemaOrRef.type == 'number') {
    return {
      unresolved: refs,
      type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
    }
  } else if (schemaOrRef.type == 'integer') {
    return {
      unresolved: refs,
      type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
    }
  } else if (schemaOrRef.type == 'string' && schemaOrRef.enum) {
    return {
      unresolved: refs,
      type:ts.createUnionTypeNode(schemaOrRef.enum.map(e => ts.createLiteralTypeNode(ts.createStringLiteral(e))))
    }
  } else if (schemaOrRef.type == 'string') {
    return {
      unresolved: refs,
      type: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
    }
  } else if (schemaOrRef.type == 'array' && schemaOrRef.items) {
    const { unresolved: recUnresolved, type } = schemaToTypeNode(schemaOrRef.items, refs)
    return {
      unresolved: recUnresolved,
      type: ts.createArrayTypeNode(type)
    }
  } else if (schemaOrRef.type == 'array') {
    return {
      unresolved: refs,
      type: ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword))
    }
  } else {
    return {
      unresolved: refs,
      type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    }
  }
}
