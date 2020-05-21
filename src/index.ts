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
  createAllPathsVariable,
  createIsPathFun,
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
    omitTrailingSemicolon: true,
  });
  sourceFile.statements = ts.createNodeArray(statements);
  return printer.printFile(sourceFile);
  return prettier.format(printer.printFile(sourceFile), {
    parser: "typescript",
    singleQuote: true,
    arrowParens: "always",
    printWidth: 100,
    trailingComma: "es5",
  });
}

type StatementsChunk = { id: string; statements: ts.Statement[] };

function importStmt(id: ts.Identifier, name: string): ts.Statement {
  return ts.createImportDeclaration(
    undefined,
    undefined,
    ts.createImportClause(undefined, ts.createNamespaceImport(id)),
    ts.createStringLiteral(name)
  );
}

const tsGenIdentifier = ts.createIdentifier("tsgen");

// eslint-disable-next-line @typescript-eslint/require-await
async function genStatements(api: OpenAPI): Promise<StatementsChunk[]> {
  const splittedPaths = splitPaths(Object.keys(api.paths), 20);
  return Promise.all(
    Object.keys(splittedPaths).map(async (id) => {
      const paths = splittedPaths[id];

      const endpoints = await openapiConverter(tsGenIdentifier, api, paths);

      const pathsTypeStmt = createPathsTypeAlias(endpoints);
      const allPathsStmt = createAllPathsVariable(endpoints);
      const isPathFun = createIsPathFun(endpoints);
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
      const importStmts = [importStmt(tsGenIdentifier, "./engine")];
      return {
        id,
        statements: [
          ...importStmts,
          allPathsStmt as ts.Statement,
          pathsTypeStmt as ts.Statement,
          isPathFun as ts.Statement,
          endpointStmt as ts.Statement,
          endpointImpl as ts.Statement,
        ],
      };
    })
  );
}

function genMain(statements: StatementsChunk[]): ts.Statement[] {
  const importIds = statements.map(({ id, statements }) => ({
    id: ts.createIdentifier(`api${id}`),
    filename: `./api.${id}`,
  }));
  const importStmts = [importStmt(tsGenIdentifier, "./engine")].concat(
    importIds.map(({ id, filename }) => importStmt(id, filename))
  );
  const exportPaths = ts.create // fix export paths;
  return [...importStmts, exportPaths];
}

async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI;
  // const schemas = api.components.schemas
  const dir = "./out";
  const statements = await genStatements(api);
  statements.forEach(({ id, statements }) => {
    const apiSrc = printStatements(statements);

    // console.log(filename, apiSrc);
    fs.writeFileSync(`${dir}/api.${id}.ts`, apiSrc);
  });
  const mainStatements = genMain(statements);
  const apiSrc = printStatements(mainStatements);
  fs.writeFileSync(`${dir}/api.ts`, apiSrc);
}

import { Static, Runtype, Union, Literal } from "runtypes";
import { splitPaths } from "./path-splitter";

const R = Union(Literal("test"));

const p = ts.createProgram({
  rootNames: ["garbage/ast-ex.ts"],
  options: {},
});
// console.log((p.getSourceFile("garbage/ast-ex.ts")?.statements[2] as any).body.statements[0].expression.left);
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).declarationList.declarations)
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).type)

main(fs.readFileSync("./garbage/github/openapi.yml", "utf8"));
