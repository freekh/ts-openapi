import * as yaml from 'js-yaml'
import * as fs from 'fs'
import { Expression, ArrowFunction, StructureKind, Project, OptionalKind, TypeAliasDeclarationStructure } from 'ts-morph'
import { OpenAPI, Parameter, Ref, Schema, PathItem, Operation } from './openapi'
import { TypeAliasDeclaration, FunctionBody } from 'typescript'
import jsonref from './jsonref'

// function resolve(api: OpenAPI, resolved: { [$ref: string]: Schema }, schema: Schema): { [$ref: string]: Schema }  {
//   jsref(api, )
// }

function schema2TypeAlias(schema: Schema): OptionalKind<TypeAliasDeclarationStructure> {
  return {
    name: '',
    type: '',
    docs: ['hello'],
  }
}

// function param2Function(parameters: Parameter[], body: FunctionBody): ArrowFunction {

// return 1
// }

// function pathItem2APIBaseExpr(pathItem: PathItem): Expression {
// return 1
// }

type OperationType = Operation & {
  type: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace',
}

async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI
  // console.log(JSON.stringify(await jsonref(api), null, 2))
  const schemas = api.components.schemas

  const project = new Project({})
  const apiFile = project.createSourceFile('api.ts')

  Object.keys(api.paths).reduce(({ cache, endpoints, conditionals, operationImpls, types, paths }, path) => {
    const pathItem = api.paths[path]
    let operations: (OperationType & { defined: boolean })[] = [
      { ...pathItem.delete, defined: !!pathItem.delete, type: 'delete' } as OperationType & { defined: boolean },
      { ...pathItem.get, defined: !!pathItem.get, type: 'get' } as OperationType & { defined: boolean },
      { ...pathItem.head, defined: !!pathItem.head, type: 'head' } as OperationType & { defined: boolean },
      { ...pathItem.options, defined: !!pathItem.options, type: 'options' } as OperationType & { defined: boolean },
      { ...pathItem.patch, defined: !!pathItem.patch, type: 'patch' } as OperationType & { defined: boolean },
      { ...pathItem.post, defined: !!pathItem.post, type: 'post' } as OperationType & { defined: boolean },
      { ...pathItem.put, defined: !!pathItem.put, type: 'put' } as OperationType & { defined: boolean },
      { ...pathItem.trace, defined: !!pathItem.trace, type: 'trace' } as OperationType & { defined: boolean },
    ].filter(op => op.defined)
    const { endpoint, conditional, types } = operations.reduce(({ endpoint, conditional, types }, op) => {
      return {
        endpoint, conditional, types
      }
    }, { endpoint, conditional, types })
    return { cache, endpoints: endpoints.concat(endpoint), conditionals.concat(), types, paths: paths.concat(path) }
  }, { cache: {}, endpoints: [], conditionals: {}, operationImpls, types: [], paths: [] })
}

main(fs.readFileSync('./petstore.yml', 'utf8'))