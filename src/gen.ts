import { Schema, PathItem } from './openapi/v300'
import { Ref, RefStore, isRef } from './openapi/ref';
import * as ts from 'typescript';
import { OperationType } from './openapi/v300/OperationType';

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

function createSimpleTypeAliasDeclaration(name: string, type: ts.TypeNode): ts.TypeAliasDeclaration {
  return ts.createTypeAliasDeclaration([], [], name, undefined, type)
}

export async function genTypes(refStore: RefStore, refs: readonly Ref[]): Promise<readonly ts.TypeAliasDeclaration[]> {
  return refs.reduce(async (prevP, ref) => {
    const prev: ts.TypeAliasDeclaration[] = await prevP
    const schema = await refStore.resolve<Schema>(ref)
    const { unresolved, type } = schemaToTypeNode(schema, refs) // skip refs we already know we will resolve
    const nextName = refToName(ref.$ref)
    if (prev.find(tad => tad.name.text == nextName)) {
      return Promise.reject(Error(`Cannot create a new type alias for ${ref.$ref} because there is one that has the same name (${nextName}) already`))
    }
    const next = createSimpleTypeAliasDeclaration(nextName, type)
    return prev.concat(next).concat(await genTypes(refStore, unresolved.filter(r => !refs.includes(r))))
  }, Promise.resolve([]))
}

const PathsTypeName = 'Paths'

export async function genEndpoints(refStore: RefStore, paths: readonly { path: string; pathItem: PathItem }[]): Promise<{ typeRefs: Ref[]; pathsType: ts.TypeAliasDeclaration; endpointType: ts.TypeAliasDeclaration; endpoint: ts.FunctionDeclaration }> {
  const pathOps = paths.map(({ path, pathItem }) => {
    const operations: (OperationType & { defined: boolean })[] = [
      { ...pathItem.delete, defined: !!pathItem.delete, type: 'delete' } as OperationType & { defined: boolean },
      { ...pathItem.get, defined: !!pathItem.get, type: 'get' } as OperationType & { defined: boolean },
      { ...pathItem.head, defined: !!pathItem.head, type: 'head' } as OperationType & { defined: boolean },
      { ...pathItem.options, defined: !!pathItem.options, type: 'options' } as OperationType & { defined: boolean },
      { ...pathItem.patch, defined: !!pathItem.patch, type: 'patch' } as OperationType & { defined: boolean },
      { ...pathItem.post, defined: !!pathItem.post, type: 'post' } as OperationType & { defined: boolean },
      { ...pathItem.put, defined: !!pathItem.put, type: 'put' } as OperationType & { defined: boolean },
      { ...pathItem.trace, defined: !!pathItem.trace, type: 'trace' } as OperationType & { defined: boolean },
    ].filter(op => op.defined)
    return { path, operations }
  })
  const pathsType = createSimpleTypeAliasDeclaration(PathsTypeName,
    ts.createUnionTypeNode(paths.map(({ path }) => {
      return ts.createLiteralTypeNode(ts.createStringLiteral(path))
    }))
  )

  const tp = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode('Paths', undefined), undefined)

  const e = pathOps.reverse().reduce((prev, { path, operations }) => {
    
    return ts.createConditionalTypeNode(
      ts.createTypeReferenceNode(tp.name, undefined),
      ts.createLiteralTypeNode(ts.createStringLiteral(path)),
      ts.createTypeReferenceNode('Endpoint1', undefined),
      prev)
  }, ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword) as ts.TypeNode)
  // const e = ts.createConditionalTypeNode(
  //   ts.createTypeReferenceNode('P', undefined),
  //   ts.createLiteralTypeNode(ts.createStringLiteral('/test/path1')),
  //   ts.createTypeReferenceNode('Endpoint1', undefined),
  //   ts.createConditionalTypeNode(
  //     ts.createTypeReferenceNode('P', undefined),
  //     ts.createLiteralTypeNode(ts.createStringLiteral('/test/path2')),
  //     ts.createTypeReferenceNode('Endpoint2', undefined),
  //     ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
  //   )
  // )
  const a = ts.createTypeAliasDeclaration([], [], 'ApiEndpoint', [tp], e)
  return Promise.resolve({
    typeRefs: [],
    pathsType,
    endpointType: a,
    endpoint: ts.createFunctionDeclaration(undefined, undefined, undefined, 'api', [], [], ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), undefined)
  })
}