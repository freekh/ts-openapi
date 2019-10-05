import * as yaml from 'js-yaml'
import * as fs from 'fs'

import { OpenAPI, Operation } from './openapi/v300'
import { Ast } from './ast'
import { resolve } from './openapi/ref'
import { convertRequestBody } from './openapi/v300/converters'

// function resolve(api: OpenAPI, resolved: { [$ref: string]: Schema }, schema: Schema): { [$ref: string]: Schema }  {
//   jsref(api, )
// }

// function schema2TypeAlias(schema: Schema): OptionalKind<TypeAliasDeclarationStructure> {
//   return {
//     name: '',
//     type: '',
//     docs: ['hello'],
//   }
// }

// function param2Function(parameters: Parameter[], body: FunctionBody): ArrowFunction {

// return 1
// }

// function pathItem2APIBaseExpr(pathItem: PathItem): Expression {
// return 1
// }

type OperationType = Operation & {
  type: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
}

function main(doc: string): void {  
  const api = yaml.safeLoad(doc) as OpenAPI
  // const schemas = api.components.schemas

  // const project = new Project({})
  // const apiFile = project.createSourceFile('api.ts')

  const ast: Ast = Object.keys(api.paths).reduce(({ endpoints, conditionals, types, paths}, path) => {
    const pathItem = api.paths[path]
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

    operations.reduce((prev, op) => {
      convertRequestBody(resolve(api, op.requestBody))
      
      return { }
    }, {})

    return { endpoints, conditionals, types, paths }
  }, { endpoints: [], conditionals: [], types: [], paths: [] })
}

main(fs.readFileSync('./garbage/petstore.yml', 'utf8'))
