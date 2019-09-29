import * as yaml from 'js-yaml'
import * as fs from 'fs'
import { Expression, ArrowFunction, StructureKind, Project, OptionalKind, TypeAliasDeclarationStructure } from 'ts-morph'
import { OpenAPI, Parameter, Ref, Schema, PathItem } from './openapi'
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


async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI
  // console.log(JSON.stringify(await jsonref(api), null, 2))
  const schemas = api.components.schemas

  const project = new Project({})
  const apiFile = project.createSourceFile('api.ts')

  Object.keys(api.paths).reduce(({ cache, endpoints, apiBase, types, paths }, path) => {
    const pathItem = api.paths[path]
    return { cache, endpoints, apiBase, types, paths: paths.concat(path) }
  }, { cache: {}, endpoints: [], conditionals: {}, types: [], paths: [] })
}

main(fs.readFileSync('./petstore.yml', 'utf8'))