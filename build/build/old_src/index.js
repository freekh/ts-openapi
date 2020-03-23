"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var yaml = require("js-yaml");
var fs = require("fs");
var OperationType_1 = require("./openapi/v300/converters/OperationType");
var ref_1 = require("./openapi/ref");
var gen_1 = require("./gen");
var ts = require("typescript");
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
function main(doc) {
    return __awaiter(this, void 0, void 0, function () {
        var api, printer, sourceFile, refStore, c_1, s, _a, _b, _c, ast;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    api = yaml.safeLoad(doc);
                    printer = ts.createPrinter({
                        newLine: ts.NewLineKind.LineFeed,
                        removeComments: false,
                        omitTrailingSemicolon: true
                    });
                    sourceFile = ts.createSourceFile('someFileName.ts', '', ts.ScriptTarget.ESNext, 
                    /*setParentNodes*/ false, ts.ScriptKind.TS);
                    refStore = new ref_1.RefStore(api);
                    if (!(api.components && api.components.schemas))
                        return [3 /*break*/, 2];
                    c_1 = api.components;
                    s = Object.keys(c_1.schemas).map(function (ref) { return c_1.schemas[ref]; });
                    console.log(Object.keys(c_1.schemas));
                    _a = sourceFile;
                    _c = (_b = ts).createNodeArray;
                    return [4 /*yield*/, gen_1.genTypes(refStore, [{ $ref: '#/components/schemas/Pet' }, { $ref: '#/components/schemas/Pets' }, { $ref: '#/components/schemas/Error' }])];
                case 1:
                    _a.statements = _c.apply(_b, [__spreadArrays.apply(void 0, [_d.sent()])]);
                    console.log(printer.printFile(sourceFile));
                    _d.label = 2;
                case 2:
                    ast = Object.keys(api.paths).reduce(function (_a, path) {
                        var endpoints = _a.endpoints, conditionals = _a.conditionals, types = _a.types, paths = _a.paths;
                        var pathItem = api.paths[path];
                        var operations = [
                            __assign(__assign({}, pathItem["delete"]), { defined: !!pathItem["delete"], type: 'delete' }),
                            __assign(__assign({}, pathItem.get), { defined: !!pathItem.get, type: 'get' }),
                            __assign(__assign({}, pathItem.head), { defined: !!pathItem.head, type: 'head' }),
                            __assign(__assign({}, pathItem.options), { defined: !!pathItem.options, type: 'options' }),
                            __assign(__assign({}, pathItem.patch), { defined: !!pathItem.patch, type: 'patch' }),
                            __assign(__assign({}, pathItem.post), { defined: !!pathItem.post, type: 'post' }),
                            __assign(__assign({}, pathItem.put), { defined: !!pathItem.put, type: 'put' }),
                            __assign(__assign({}, pathItem.trace), { defined: !!pathItem.trace, type: 'trace' }),
                        ].filter(function (op) { return op.defined; });
                        operations.reduce(function (prev, op) {
                            OperationType_1.convertOperation(refStore);
                            return {};
                        }, {});
                        return { endpoints: endpoints, conditionals: conditionals, types: types, paths: paths };
                    }, { endpoints: [], conditionals: [], types: [], paths: [] });
                    return [2 /*return*/];
            }
        });
    });
}
main(fs.readFileSync('./garbage/petstore.yml', 'utf8'));