import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as ts from 'typescript';
import { OpenAPI } from './openapi/v300';
import { delareTypeLiteralAlias, declareStringLiteralUnion, declareConditionalNeverType, createStringLitralType, createTypeRereference as createTypeReference, EndpointDef, createEndpointType, declareType, createPaths, createApiFunction } from './gen-ast-helpers';


function printStatements(statements: ts.Statement[]): string {
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


// eslint-disable-next-line @typescript-eslint/require-await
async function genStatements(api: OpenAPI): Promise<ts.Statement[]> {
  const typesStmts: ts.Statement[] = [
    delareTypeLiteralAlias(
      'hallo',
      {
        test: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      },
    ),
  ]
  const p: EndpointDef = {
    'get': {
      parameters: { 'name': ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword) },
      responseType: 'application/json',
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    },
    'post': {
      parameters: { 'name2': ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword) },
      responseType: 'application/json',
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    }
  }
  const endpointDefSmt = declareType('Test', createEndpointType(p))
  const pathsTypeStmt = declareStringLiteralUnion('Paths', ['test', 'too'])
  const endpointStmt = declareConditionalNeverType(
    'Endpoint',
    'P', pathsTypeStmt,
    ['test', 'too'].map(value => {
      return {
        left: createStringLitralType(value),
        right: createTypeReference('hello'),
      }
    })
  )
  const endpointImpl = createApiFunction({ 'test1': p }, endpointStmt)
  return [
    ...typesStmts,
    pathsTypeStmt as ts.Statement,
    endpointStmt as ts.Statement,
    endpointDefSmt as ts.Statement,
    endpointImpl as ts.Statement
  ]
}

async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI
  // const schemas = api.components.schemas


  console.log(printStatements(await genStatements(api)))
}


const p = ts.createProgram({
  rootNames: ['garbage/ast-ex.ts'],
  options: {
  }
})
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).declarationList.declarations)
console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).type)

main(fs.readFileSync('./garbage/petstore.yml', 'utf8'))
