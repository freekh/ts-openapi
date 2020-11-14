import * as ts from "typescript";

const printer = ts.createPrinter({ removeComments: false });

export function tsTag(
  strings: TemplateStringsArray,
  ...nodes: ts.Node[]
): ts.Node {
  const sourceFile = ts.createSourceFile("<tstag>", "", ts.ScriptTarget.ES2015);
  const sourceText = strings.raw
    .map((s, i) => {
      const n = nodes[i];
      if (i < nodes.length) {
        let emitHint = ts.EmitHint.Unspecified;
        return s + printer.printNode(emitHint, n, sourceFile);
      }
      return s;
    })
    .join("");
  // console.log(ts.createSourceFile('tstag.ts', sourceText, ts.ScriptTarget.ES2015, true).getFullText())
  return ts.createSourceFile(
    "tstag.ts",
    sourceText,
    ts.ScriptTarget.ES2015,
    true
  );
}

export function print(node: ts.Node): string {
  return node.getFullText();
}
// import { tsTag, print } from '../src';
// import ts, { factory } from "typescript";

// describe('blah', () => {
//   it('works', () => {
//     const e: ts.FunctionDeclaration =
//       factory.createFunctionDeclaration([], [], undefined, "test", [], [], factory.createTypeReferenceNode("string"), factory.createBlock([factory.createReturnStatement(factory.createStringLiteral("test"))]))
//     expect(print(tsTag`
//       const a = ${factory.createStringLiteral("test")}

//       // test
//       ${e}

//       const b = 1`)).toEqual(`
//       const a = "test"

//       // test
//       function test(): string { return "test"; }

//       const b = 1`);
//   });
// });
