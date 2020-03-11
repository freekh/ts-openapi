import * as yaml from "js-yaml";
import * as fs from "fs";
import * as ts from "typescript";
import { OpenAPI } from "./openapi/v300";
import {
  declareTypeLiteralAlias,
  EndpointDef,
  declareType,
  createApiFunction,
  createEndpointTypeAlias,
  createPathsTypeAlias,
  createAllPathsVariable
} from "./gen-ast-helpers";
import * as prettier from "prettier";
import { openapiConverter } from "./openapi/v300/gen";

function printStatements(statements: ts.Statement[]): string {
  const sourceFile = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.ES2015,
    true,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
    removeComments: false,
    omitTrailingSemicolon: true
  });
  sourceFile.statements = ts.createNodeArray(statements);
  return printer.printFile(sourceFile)
  return prettier.format(printer.printFile(sourceFile), {
    parser: "typescript",
    singleQuote: true,
    arrowParens: "always",
    printWidth: 100,
    trailingComma: "es5"
  });
}

// eslint-disable-next-line @typescript-eslint/require-await
async function genStatements(api: OpenAPI): Promise<ts.Statement[]> {
  const tsGenIdentifier = ts.createIdentifier("tsgen");
  const endpoints = await openapiConverter(tsGenIdentifier, api);
  // console.log(JSON.stringify(endpoints, null, 2));

  const pathsTypeStmt = createPathsTypeAlias(endpoints);
  const allPathsStmt = createAllPathsVariable(endpoints);
  const endpointStmt = createEndpointTypeAlias(
    tsGenIdentifier,
    pathsTypeStmt,
    endpoints
  );
  const endpointImpl = createApiFunction(
    tsGenIdentifier,
    endpoints,
    endpointStmt
  );
  const importStmts = [
    ts.createImportDeclaration(
      undefined,
      undefined,
      ts.createImportClause(
        undefined,
        ts.createNamespaceImport(tsGenIdentifier)
      ),
      ts.createStringLiteral("./engine")
    )
  ];

  return [
    ...importStmts,
    allPathsStmt as ts.Statement,
    pathsTypeStmt as ts.Statement,
    endpointStmt as ts.Statement,
    endpointImpl as ts.Statement
  ];
}

async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI;
  // const schemas = api.components.schemas

  const apiSrc = printStatements(await genStatements(api));

  // console.log(apiSrc);
  fs.writeFileSync("./out/api.ts", apiSrc);
}

import { Static, Runtype, Union, Literal } from 'runtypes'

const R = Union(Literal('test'))



const p = ts.createProgram({
  rootNames: ["garbage/ast-ex.ts"],
  options: {}
});
// console.log((p.getSourceFile("garbage/ast-ex.ts")?.statements[1] as any));
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).declarationList.declarations)
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).type)

main(fs.readFileSync("./garbage/google/gmail.yml", "utf8"));
