import * as yaml from "js-yaml";
import * as fs from "fs";
import * as ts from "typescript";
import { OpenAPI } from "./openapi/v300";
import {
  delareTypeLiteralAlias,
  EndpointDef,
  declareType,
  createApiFunction,
  createEndpointTypeAlias,
  createEndpointTypeLiteral,
  createPathsTypeAlias
} from "./gen-ast-helpers";
import * as prettier from "prettier";

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
  const p: EndpointDef = {
    get: {
      parameters: {
        name: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      },
      responseType: "application/json",
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
    },
    post: {
      parameters: {
        name2: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      },
      responseType: "application/json",
      returns: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
    }
  };
  const endpoints =  {
    '/test1': p
  }
  const pathsTypeStmt = createPathsTypeAlias(endpoints);
  const tsGenIdentifier = ts.createIdentifier("tsgen");
  const endpointStmt = createEndpointTypeAlias(tsGenIdentifier, pathsTypeStmt, endpoints);
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
  const endpointImpl = createApiFunction(
    tsGenIdentifier,
    { test1: p },
    endpointStmt
  );

  return [
    ...importStmts,
    pathsTypeStmt as ts.Statement,
    endpointStmt as ts.Statement,
    endpointImpl as ts.Statement
  ];
}

async function main(doc: string): Promise<void> {
  const api = yaml.safeLoad(doc) as OpenAPI;
  // const schemas = api.components.schemas

  const apiSrc = printStatements(await genStatements(api));

  console.log(apiSrc);
  fs.writeFileSync("./out/api.ts", apiSrc);
}

const p = ts.createProgram({
  rootNames: ["garbage/ast-ex.ts"],
  options: {}
});
console.log(p.getSourceFile("garbage/ast-ex.ts")?.statements[0] as any);
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).declarationList.declarations)
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).type)

main(fs.readFileSync("./garbage/petstore.yml", "utf8"));
