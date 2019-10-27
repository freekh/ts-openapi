import * as yaml from 'js-yaml'
import * as fs from 'fs'

import { OpenAPI, Operation } from './openapi/v300'
import { Ast } from './ast'
import { OperationType } from './openapi/v300/OperationType'
import { convertOperation } from './openapi/v300/converters/OperationType'
import { RefStore, isRef } from './openapi/ref'
import { genTypes } from './gen'
import * as ts from 'typescript';

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

async function main(doc: string): Promise<void> {  
  const api = yaml.safeLoad(doc) as OpenAPI
  // const schemas = api.components.schemas

  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
    removeComments: false,
    omitTrailingSemicolon: true
  });

  // Create a source file
  const sourceFile = ts.createSourceFile(
      'someFileName.ts',
      '',
      ts.ScriptTarget.ESNext,
      /*setParentNodes*/ false,
      ts.ScriptKind.TS
  );

  // apiFile.getStatements().map(a => console.log((a.compilerNode as any).type.members))
  const refStore = new RefStore(api)
  if (api.components && api.components.schemas) {
    const c = api.components

    const s = Object.keys(c.schemas).map(ref => c.schemas[ref])
    console.log(Object.keys(c.schemas))
    sourceFile.statements = ts.createNodeArray([
      ...await genTypes(refStore, [{$ref: '#/components/schemas/Pet' }, {$ref: '#/components/schemas/Pets'}, {$ref: '#/components/schemas/Error'}])
    ]);
    console.log(printer.printFile(sourceFile));
    // console.log(project.emitToMemory().getFiles()[0].text)
    
  }

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
      convertOperation(refStore)
      
      return { }
    }, {})

    return { endpoints, conditionals, types, paths }
  }, { endpoints: [], conditionals: [], types: [], paths: [] })
}

main(fs.readFileSync('./garbage/petstore.yml', 'utf8'))
