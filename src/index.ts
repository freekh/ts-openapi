import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as ts from 'typescript';
import { OpenAPI } from './openapi/v300';
import { delareTypeLiteralAlias, declareStringLiteralUnion, declareConditionalNeverType, createStringLitralType, createTypeRereference, EndpointDef, createEndpointType, declareType, createEndpointImplementation } from './gen-ast-helpers';


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
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      body: [
        
      ]
    }, 
    'post': {
      parameters: { 'name2': ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword) },
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      body: []
    }
  }
  const endpointDefSmt = declareType("Test", createEndpointType(p))
  const pathsTypeStmt = declareStringLiteralUnion('Paths', ['test', 'too'])
  const endpointStmt = declareConditionalNeverType(
    'ApiEndpoint',
    'P', pathsTypeStmt,
    ['test', 'too'].map(value => {
      return {
        left: createStringLitralType(value),
        right: createTypeRereference('hello'),
      }
    })
  )
  const endpointImpl = ts.createVariableStatement(undefined, [
    // ts.createVariableDeclaration('test', undefined, createEndpointImplementation(p))
    ts.createArrowFunction(undefined, [ts.createTypeParameterDeclaration('P', undefined, undefined)], [ts.createTypeParameterDeclaration('p', undefined, undefined)], undefined, undefined, ts.createSwitch(ts.createIdentifier('p'), ts.createCaseBlock([ts.createCaseClause(ts.createStringLiteral('test1'), [])])))
    
    // ts.createSwitch(ts.createCaseBlock())
  ])
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

main(fs.readFileSync('./garbage/petstore.yml', 'utf8'))
