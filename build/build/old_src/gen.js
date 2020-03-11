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
exports.__esModule = true;
var ref_1 = require("./openapi/ref");
var ts = require("typescript");
var os_1 = require("os");
function refToName(ref) {
    return ref.split('/').slice(-1)[0];
}
function schemaToTypeNode(schemaOrRef, refs) {
    if (ref_1.isRef(schemaOrRef)) {
        return {
            unresolved: refs.find(function (_a) {
                var $ref = _a.$ref;
                return $ref == schemaOrRef.$ref;
            }) ? refs : refs.concat(schemaOrRef),
            type: ts.createTypeReferenceNode(refToName(schemaOrRef.$ref), undefined)
        };
    }
    else if (schemaOrRef.type == 'object') {
        var properties_1 = schemaOrRef.properties || {};
        var _a = Object.keys(properties_1).reduce(function (prev, name) {
            var property = properties_1[name];
            var _a = schemaToTypeNode(property, prev.unresolved), unresolved = _a.unresolved, type = _a.type;
            return {
                unresolved: unresolved,
                members: prev.members.concat(ts.createPropertySignature([], name, undefined, type, undefined))
            };
        }, {
            unresolved: refs,
            members: []
        }), recUnresolved = _a.unresolved, members = _a.members;
        return {
            unresolved: recUnresolved,
            type: ts.createTypeLiteralNode(members)
        };
    }
    else if (schemaOrRef.type == 'boolean') {
        return {
            unresolved: refs,
            type: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
        };
    }
    else if (schemaOrRef.type == 'number') {
        return {
            unresolved: refs,
            type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        };
    }
    else if (schemaOrRef.type == 'integer') {
        return {
            unresolved: refs,
            type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        };
    }
    else if (schemaOrRef.type == 'string' && schemaOrRef["enum"]) {
        return {
            unresolved: refs,
            type: ts.createUnionTypeNode(schemaOrRef["enum"].map(function (e) { return ts.createLiteralTypeNode(ts.createStringLiteral(e)); }))
        };
    }
    else if (schemaOrRef.type == 'string') {
        return {
            unresolved: refs,
            type: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        };
    }
    else if (schemaOrRef.type == 'array' && schemaOrRef.items) {
        var _b = schemaToTypeNode(schemaOrRef.items, refs), recUnresolved = _b.unresolved, type_1 = _b.type;
        return {
            unresolved: recUnresolved,
            type: ts.createArrayTypeNode(type_1)
        };
    }
    else if (schemaOrRef.type == 'array') {
        return {
            unresolved: refs,
            type: ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword))
        };
    }
    else {
        return {
            unresolved: refs,
            type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
        };
    }
}
exports.schemaToTypeNode = schemaToTypeNode;
function createSimpleTypeAliasDeclaration(name, type) {
    return ts.createTypeAliasDeclaration([], [], name, undefined, type);
}
function createReturnType(refStore, responses) {
    return __awaiter(this, void 0, void 0, function () {
        var unresolved, _a, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(Object.keys(responses).length == 0))
                        return [3 /*break*/, 1];
                    return [2 /*return*/, {
                            unresolved: [],
                            type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
                        }];
                case 1:
                    unresolved = [] // TODO: ugly!
                    ;
                    _b = (_a = ts).createUnionTypeNode;
                    return [4 /*yield*/, Promise.all(Object.keys(responses).map(function (status) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var response;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, refStore.resolve(responses[status])];
                                        case 1:
                                            response = _a.sent();
                                            Object.keys(response.content).map(function (responseType) {
                                                var content = response.content[responseType];
                                            });
                                            return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)];
                                    }
                                });
                            });
                        }))];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/, { type: os_1.type, unresolved: unresolved }];
            }
        });
    });
}
function opsToType(refStore, refs, path, ops) {
    return __awaiter(this, void 0, void 0, function () {
        var unresolved, type, _a, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    unresolved = [] // TODO: ugly!
                    ;
                    _b = (_a = ts).createTypeLiteralNode;
                    return [4 /*yield*/, Promise.all(ops.map(function (op) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var params, returnTypeRes, opFun;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all((op.parameters || []).map(function (param) {
                                                return __awaiter(_this, void 0, void 0, function () {
                                                    var resolvedParam, paramTypeRes;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, refStore.resolve(param)];
                                                            case 1:
                                                                resolvedParam = _a.sent();
                                                                paramTypeRes = schemaToTypeNode(resolvedParam.schema, refs.concat(unresolved));
                                                                unresolved = unresolved.concat(paramTypeRes.unresolved); // TODO: ugly!
                                                                return [2 /*return*/, ts.createParameter(undefined, undefined, undefined, resolvedParam.name, undefined, paramTypeRes.type, undefined)];
                                                        }
                                                    });
                                                });
                                            }))];
                                        case 1:
                                            params = _a.sent();
                                            return [4 /*yield*/, createReturnType(refStore, op.responses)];
                                        case 2:
                                            returnTypeRes = _a.sent();
                                            unresolved = unresolved.concat(returnTypeRes.unresolved); // TODO: ugly!
                                            opFun = ts.createFunctionTypeNode(undefined, params, returnTypeRes.type);
                                            return [2 /*return*/, ts.createPropertySignature(undefined, op.type, undefined, opFun, undefined)];
                                    }
                                });
                            });
                        }))];
                case 1:
                    type = _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/, {
                            type: type,
                            unresolved: unresolved
                        }];
            }
        });
    });
}
function genTypes(refStore, refs) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, refs.reduce(function (prevP, ref) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var prev, schema, _a, unresolved, type, nextName, next, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, prevP];
                                case 1:
                                    prev = _d.sent();
                                    return [4 /*yield*/, refStore.resolve(ref)];
                                case 2:
                                    schema = _d.sent();
                                    _a = schemaToTypeNode(schema, refs) // skip refs we already know we will resolve
                                        , unresolved = _a.unresolved, type = _a.type;
                                    nextName = refToName(ref.$ref);
                                    if (prev.find(function (tad) { return tad.name.text == nextName; })) {
                                        return [2 /*return*/, Promise.reject(Error("Cannot create a new type alias for " + ref.$ref + " because there is one that has the same name (" + nextName + ") already"))];
                                    }
                                    next = createSimpleTypeAliasDeclaration(nextName, type);
                                    _c = (_b = prev.concat(next)).concat;
                                    return [4 /*yield*/, genTypes(refStore, unresolved.filter(function (r) { return !refs.includes(r); }))];
                                case 3: return [2 /*return*/, _c.apply(_b, [_d.sent()])];
                            }
                        });
                    });
                }, Promise.resolve([]))];
        });
    });
}
exports.genTypes = genTypes;
var PathsTypeName = 'Paths';
var ApiEndpointName = 'ApiEndpoint';
function genEndpoints(refStore, paths) {
    return __awaiter(this, void 0, void 0, function () {
        var pathOps, pathsType, typeRefs, tp, e, endpointType, endpoint;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pathOps = paths.map(function (_a) {
                        var path = _a.path, pathItem = _a.pathItem;
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
                        return { path: path, operations: operations };
                    });
                    pathsType = createSimpleTypeAliasDeclaration(PathsTypeName, ts.createUnionTypeNode(paths.map(function (_a) {
                        var path = _a.path;
                        return ts.createLiteralTypeNode(ts.createStringLiteral(path));
                    })));
                    typeRefs = [] // TODO: ugly!
                    ;
                    tp = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode(PathsTypeName, undefined), undefined);
                    return [4 /*yield*/, pathOps.reverse().reduce(function (prev, _a) {
                            var path = _a.path, operations = _a.operations;
                            return __awaiter(_this, void 0, void 0, function () {
                                var _b, unresolved, type, _c, _d, _e;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0: return [4 /*yield*/, opsToType(refStore, typeRefs, path, operations)
                                            // eslint-disable-next-line require-atomic-updates
                                        ];
                                        case 1:
                                            _b = _f.sent(), unresolved = _b.unresolved, type = _b.type;
                                            // eslint-disable-next-line require-atomic-updates
                                            typeRefs = typeRefs.concat(unresolved); // TODO: ugly & dangerous!
                                            _d = (_c = ts).createConditionalTypeNode;
                                            _e = [ts.createTypeReferenceNode(tp.name, undefined),
                                                ts.createLiteralTypeNode(ts.createStringLiteral(path)),
                                                type];
                                            return [4 /*yield*/, prev];
                                        case 2: // TODO: ugly & dangerous!
                                            return [2 /*return*/, _d.apply(_c, _e.concat([_f.sent()]))];
                                    }
                                });
                            });
                        }, Promise.resolve(ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)))];
                case 1:
                    e = _a.sent();
                    endpointType = ts.createTypeAliasDeclaration([], [], ApiEndpointName, [tp], e);
                    endpoint = ts.createFunctionDeclaration(undefined, undefined, undefined, 'api', [], [], ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), undefined);
                    return [2 /*return*/, {
                            typeRefs: typeRefs,
                            pathsType: pathsType,
                            endpointType: endpointType,
                            endpoint: endpoint
                        }];
            }
        });
    });
}
exports.genEndpoints = genEndpoints;
