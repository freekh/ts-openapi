import * as ts from 'typescript';
import { format } from 'prettier';

const printer = ts.createPrinter({ removeComments: false });

/* I cant believe what I have done.... :) 
   Which is remove garbage and hack around emitting code errors.
   It is certainly not good, but will it bite me? 
   It feels like that will be the case, but you tell me future me :) */
function eraseNode(n: ts.Node): ts.Node {
  const c = {
    ...(n as any),
  };
  return Object.keys(c).reduce((prev, k) => {
    const v = c[k as string];
    if (k === 'parent') {
      return {
        ...prev,
        parent: undefined,
      };
    }
    if (Array.isArray(v)) {
      return {
        ...prev,
        [k as string]: v.map(eraseNode),
      };
    }
    if (typeof v === 'object') {
      return {
        ...prev,
        [k as string]: eraseNode(v),
      };
    }

    return {
      ...prev,
      [k as string]: v,
    };
  }, {}) as any;
}

export function tsGen(
  strings: TemplateStringsArray,
  ...nodes: (ts.Node | string)[]
): string {
  return print(tsSource(strings, ...nodes));
}

function print(sourceFile: ts.SourceFile): string {
  return format(sourceFile.getFullText(), { parser: 'typescript' });
}

function isString(sOrN: ts.Node | string): sOrN is string {
  return typeof sOrN === 'string';
}

function tsSource(
  strings: TemplateStringsArray,
  ...nOrS: (ts.Node | string)[]
): ts.SourceFile {
  const sourceFile = ts.createSourceFile('<tstag>', '', ts.ScriptTarget.ES2015);
  const sourceText = strings.raw
    .map((s, i) => {
      const n = nOrS[i];
      if (i < nOrS.length) {
        if (isString(n)) {
          return s + n;
        }
        let emitHint = ts.EmitHint.Unspecified;
        return s + printer.printNode(emitHint, eraseNode(n), sourceFile);
      }
      return s;
    })
    .join('');
  // console.log(ts.createSourceFile('tstag.ts', sourceText, ts.ScriptTarget.ES2015, true).getFullText())
  return ts.createSourceFile(
    'tstag.ts',
    sourceText,
    ts.ScriptTarget.ES2015,
    true
  );
}

export function tsStatements(
  strings: TemplateStringsArray,
  ...nodes: (ts.Node | string)[]
): ts.Statement[] {
  return tsSource(strings, ...nodes).statements.slice();
}

export function tsExpression(
  strings: TemplateStringsArray,
  ...nodes: (ts.Node | string)[]
): ts.Expression {
  const v = tsSource(strings, ...nodes);
  if (v.statements.length > 1) {
    throw new Error(
      `Cannot convert multiple statements to expression: ${v.statements.join(
        '\n'
      )}`
    );
  }
  return (v.statements[0] as any) as ts.Expression;
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
