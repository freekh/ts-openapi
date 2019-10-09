import { genTypes, genEndpoints } from './gen'
import * as fs from 'fs'
import { RefStore } from './openapi/ref'
import * as yaml from 'js-yaml'
import * as ts from 'typescript'

const doc = yaml.safeLoad(fs.readFileSync('./test/assets/openapi/v300/petstore.yml', 'utf8'))
const refStore = new RefStore(doc)

function printStatements(statements: readonly ts.Statement[]): string {
  const sourceFile = ts.createSourceFile(
    'test.ts', '',
    ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS
  )
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
    removeComments: false,
    omitTrailingSemicolon: true
  })
  sourceFile.statements = ts.createNodeArray(statements)
  return printer.printFile(sourceFile)
}

test('refs to type alias declarations', async () => {
  const types = await genTypes(refStore, [{$ref: '#/components/schemas/Pet' }, {$ref: '#/components/schemas/Pets'}, {$ref: '#/components/schemas/Error'}])
  expect('\n' + printStatements(types)).toBe(`
type Pet = {
    id: number;
    name: string;
    tag: "one" | "two";
};
type Pets = Pet[];
type Error = {
    code: number;
    message: string;
};
`)   
})

test('todo', async () => {
  const { pathsType, endpoint, endpointType } = await genEndpoints(refStore, 
    Object.keys(doc.paths).map(path => ({ path, pathItem: doc.paths[path] }))
  )
  expect('\n' + printStatements([pathsType, endpoint, endpointType])).toBe(`
`)   
})