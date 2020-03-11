"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
var yaml = require("js-yaml");
var fs = require("fs");
var ts = require("typescript");
var gen_ast_helpers_1 = require("./gen-ast-helpers");
var prettier = require("prettier");
var gen_1 = require("./openapi/v300/gen");
function printStatements(statements) {
    var sourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS);
    var printer = ts.createPrinter({
        newLine: ts.NewLineKind.LineFeed,
        removeComments: false,
        omitTrailingSemicolon: true
    });
    sourceFile.statements = ts.createNodeArray(statements);
    return printer.printFile(sourceFile);
    return prettier.format(printer.printFile(sourceFile), {
        parser: "typescript",
        singleQuote: true,
        arrowParens: "always",
        printWidth: 100,
        trailingComma: "es5"
    });
}
// eslint-disable-next-line @typescript-eslint/require-await
function genStatements(api) {
    return __awaiter(this, void 0, void 0, function () {
        var tsGenIdentifier, endpoints, pathsTypeStmt, allPathsStmt, endpointStmt, endpointImpl, importStmts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tsGenIdentifier = ts.createIdentifier("tsgen");
                    return [4 /*yield*/, gen_1.openapiConverter(tsGenIdentifier, api)];
                case 1:
                    endpoints = _a.sent();
                    console.log(endpoints);
                    pathsTypeStmt = gen_ast_helpers_1.createPathsTypeAlias(endpoints);
                    allPathsStmt = gen_ast_helpers_1.createAllPathsVariable(endpoints);
                    endpointStmt = gen_ast_helpers_1.createEndpointTypeAlias(tsGenIdentifier, pathsTypeStmt, endpoints);
                    endpointImpl = gen_ast_helpers_1.createApiFunction(tsGenIdentifier, endpoints, endpointStmt);
                    importStmts = [
                        ts.createImportDeclaration(undefined, undefined, ts.createImportClause(undefined, ts.createNamespaceImport(tsGenIdentifier)), ts.createStringLiteral("./engine"))
                    ];
                    return [2 /*return*/, __spreadArrays(importStmts, [
                            allPathsStmt,
                            pathsTypeStmt,
                            endpointStmt,
                            endpointImpl
                        ])];
            }
        });
    });
}
function main(doc) {
    return __awaiter(this, void 0, void 0, function () {
        var api, apiSrc, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    api = yaml.safeLoad(doc);
                    _a = printStatements;
                    return [4 /*yield*/, genStatements(api)];
                case 1:
                    apiSrc = _a.apply(void 0, [_b.sent()]);
                    console.log(apiSrc);
                    fs.writeFileSync("./out/api.ts", apiSrc);
                    return [2 /*return*/];
            }
        });
    });
}
var runtypes_1 = require("runtypes");
var R = runtypes_1.Union(runtypes_1.Literal('test'));
var p = ts.createProgram({
    rootNames: ["garbage/ast-ex.ts"],
    options: {}
});
console.log((_a = p.getSourceFile("garbage/ast-ex.ts")) === null || _a === void 0 ? void 0 : _a.statements[1]);
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).declarationList.declarations)
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any))
// console.log((p.getSourceFile('garbage/ast-ex.ts')?.statements[0] as any).type)
main(fs.readFileSync("./garbage/google/gmail.yml", "utf8"));
