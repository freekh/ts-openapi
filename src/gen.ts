import { Schema, PathItem } from './openapi/v300'
import { Ref, RefStore, isRef } from './openapi/ref';
import * as ts from 'typescript';
import { OperationType } from './openapi/v300/OperationType';
import { type } from 'os';

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

async function opsToType(refStore: RefStore, refs: Ref[], path: string, ops: OperationType[]): Promise<{ unresolved: Ref[]; type: ts.TypeNode }> {
  let unresolved: Ref[] = [] // TODO: ugly!
  const type = ts.createTypeLiteralNode(await Promise.all(ops.map(async (op) => {
    const params = await Promise.all((op.parameters || []).map(async param => {
      const resolvedParam = await refStore.resolve(param)
      const paramTypeRes = schemaToTypeNode(resolvedParam.schema, refs.concat(unresolved))

      unresolved = unresolved.concat(paramTypeRes.unresolved) // TODO: ugly!

      return ts.createParameter(undefined, undefined, undefined, resolvedParam.name, undefined, paramTypeRes.type, undefined)
    }))

    Object.keys(op.responses).map(status => {
      if (status == 'default') {
        // TODO: du vil ha noe sånt som: 
        type TestResponse = { default: string; 200: null;  }
      } else {
        try {
          const status = parseInt(status)
        } catch (e) {
          throw Error(`Could not parse status: ${status} in ${op.type} of ${path}`)
        }
      }
      
    })
    
    const opFun = ts.createFunctionTypeNode(undefined, params, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword))
    return ts.createPropertySignature(undefined, op.type, undefined, opFun, undefined)
  })))
  return { 
    type,
    unresolved,
  }
}

export async function genTypes(refStore: RefStore, refs: readonly Ref[]): Promise<ts.TypeAliasDeclaration[]> {
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
const ApiEndpointName = 'ApiEndpoint'

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
  
  let typeRefs: Ref[] =  [] // TODO: ugly!
  
  const tp = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode(PathsTypeName, undefined), undefined)
  const e = await pathOps.reverse().reduce(async (prev, { path, operations }) => {
    const { unresolved, type }  = await opsToType(refStore, typeRefs, path, operations)
    // eslint-disable-next-line require-atomic-updates
    typeRefs = typeRefs.concat(unresolved) // TODO: ugly & dangerous!
    return ts.createConditionalTypeNode(
      ts.createTypeReferenceNode(tp.name, undefined),
      ts.createLiteralTypeNode(ts.createStringLiteral(path)),
      type,
      await prev)
  }, Promise.resolve(ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword) as ts.TypeNode))
  const endpointType = ts.createTypeAliasDeclaration([], [], ApiEndpointName, [tp], e)
  
  const endpoint = ts.createFunctionDeclaration(undefined, undefined, undefined, 'api', [], [], ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), undefined)
  return {
    typeRefs,
    pathsType,
    endpointType,
    endpoint,
  }
}
