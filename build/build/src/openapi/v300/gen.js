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
var ts = require("typescript");
var gen_ast_helpers_1 = require("../../gen-ast-helpers");
var ref_1 = require("../../../old_src/openapi/ref");
function isNotIdentifier(n) {
    var entityName = ts.parseIsolatedEntityName(n, ts.ScriptTarget.ES3);
    if (entityName) {
        return !ts.isIdentifier(entityName);
    }
    else {
        return false;
    }
}
function gracefulProp2ObjectFail(properties) {
    return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
}
function convertSchema(schema, refStore) {
    return __awaiter(this, void 0, void 0, function () {
        var properties_1, members, type, _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(schema.type == "object"))
                        return [3 /*break*/, 2];
                    properties_1 = schema.properties || {};
                    if (!!Object.keys(properties_1).find(isNotIdentifier)) {
                        return [2 /*return*/, gracefulProp2ObjectFail(properties_1)];
                    }
                    return [4 /*yield*/, Promise.all(Object.keys(properties_1).map(function (name) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var property, type, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            property = properties_1[name];
                                            _a = convertSchema;
                                            return [4 /*yield*/, refStore.resolve(property)];
                                        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent(),
                                                refStore])];
                                        case 2:
                                            type = _b.sent();
                                            return [2 /*return*/, ts.createPropertySignature([], isNotIdentifier(name) ? ts.createStringLiteral(name) : name, undefined, type, undefined)];
                                    }
                                });
                            });
                        }, []))];
                case 1:
                    members = _b.sent();
                    return [2 /*return*/, ts.createTypeLiteralNode(members)];
                case 2:
                    if (!(schema.type == "boolean"))
                        return [3 /*break*/, 3];
                    return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)];
                case 3:
                    if (!(schema.type == "number"))
                        return [3 /*break*/, 4];
                    return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)];
                case 4:
                    if (!(schema.type == "integer"))
                        return [3 /*break*/, 5];
                    return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)];
                case 5:
                    if (!(schema.type == "string" && schema["enum"]))
                        return [3 /*break*/, 6];
                    return [2 /*return*/, ts.createUnionTypeNode(schema["enum"].map(function (e) { return ts.createLiteralTypeNode(ts.createStringLiteral(e)); }))];
                case 6:
                    if (!(schema.type == "string"))
                        return [3 /*break*/, 7];
                    return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)];
                case 7:
                    if (!(schema.type == "array" && schema.items))
                        return [3 /*break*/, 10];
                    _a = convertSchema;
                    return [4 /*yield*/, refStore.resolve(schema.items)];
                case 8: return [4 /*yield*/, _a.apply(void 0, [_b.sent(),
                        refStore])];
                case 9:
                    type = _b.sent();
                    return [2 /*return*/, ts.createArrayTypeNode(type)];
                case 10:
                    if (schema.type == "array") {
                        return [2 /*return*/, ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword))];
                    }
                    else {
                        return [2 /*return*/, ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)];
                    }
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.convertSchema = convertSchema;
var ValidMethods = [
    "delete",
    "options",
    "get",
    "post",
    "trace",
    "put",
    "head",
    "patch"
];
var PreferredMediaTypes = ['application/json', 'text/xml'];
function pickMediaTypeSchema(content) {
    var supportedMediaTypes = Object.keys(content || {});
    var mediaType = PreferredMediaTypes.find(function (preferred) { return supportedMediaTypes.indexOf(preferred) != -1; }) || supportedMediaTypes[0];
    if (content && mediaType && content[mediaType]) {
        var schema = content[mediaType].schema;
        if (schema) {
            return { mediaType: mediaType, schema: schema };
        }
    }
    return { mediaType: mediaType, schema: null };
}
function openapiConverter(tsGenIdentifier, api) {
    return __awaiter(this, void 0, void 0, function () {
        var refStore, endpoints;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    refStore = new ref_1.RefStore(api);
                    return [4 /*yield*/, Object.keys(api.paths).reduce(function (endpoints, path) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var pathItem, operations, endpoint, _a;
                                var _b;
                                var _this = this;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            pathItem = api.paths[path];
                                            operations = [
                                                __assign(__assign({}, pathItem["delete"]), { defined: !!pathItem["delete"], type: "delete" }),
                                                __assign(__assign({}, pathItem.get), { defined: !!pathItem.get, type: "get" }),
                                                __assign(__assign({}, pathItem.head), { defined: !!pathItem.head, type: "head" }),
                                                __assign(__assign({}, pathItem.options), { defined: !!pathItem.options, type: "options" }),
                                                __assign(__assign({}, pathItem.patch), { defined: !!pathItem.patch, type: "patch" }),
                                                __assign(__assign({}, pathItem.post), { defined: !!pathItem.post, type: "post" }),
                                                __assign(__assign({}, pathItem.put), { defined: !!pathItem.put, type: "put" }),
                                                __assign(__assign({}, pathItem.trace), { defined: !!pathItem.trace, type: "trace" })
                                            ].filter(function (op) { return op.defined; });
                                            return [4 /*yield*/, operations.reduce(function (endpoint, operation) {
                                                    return __awaiter(_this, void 0, void 0, function () {
                                                        var parameters, requestBody, _a, mediaType, bodySchemaOrRef, bodySchema, body, _b, responseValues, isValidResponseValues, returnTypes, endpointMethod, _c;
                                                        var _d;
                                                        var _this = this;
                                                        return __generator(this, function (_e) {
                                                            switch (_e.label) {
                                                                case 0: return [4 /*yield*/, (operation.parameters || []).reduce(function (prevP, parameterOrRef) {
                                                                        return __awaiter(_this, void 0, void 0, function () {
                                                                            var prev, parameter, typeNode, _a;
                                                                            var _b, _c, _d, _e;
                                                                            return __generator(this, function (_f) {
                                                                                switch (_f.label) {
                                                                                    case 0: return [4 /*yield*/, prevP];
                                                                                    case 1:
                                                                                        prev = _f.sent();
                                                                                        return [4 /*yield*/, refStore.resolve(parameterOrRef)];
                                                                                    case 2:
                                                                                        parameter = _f.sent();
                                                                                        _a = convertSchema;
                                                                                        return [4 /*yield*/, refStore.resolve(parameter.schema)];
                                                                                    case 3: return [4 /*yield*/, _a.apply(void 0, [_f.sent(),
                                                                                            refStore])];
                                                                                    case 4:
                                                                                        typeNode = _f.sent();
                                                                                        switch (parameter["in"]) {
                                                                                            case "cookie":
                                                                                                return [2 /*return*/, __assign(__assign({}, prev), { cookie: __assign(__assign({}, prev.cookie), (_b = {}, _b[parameter.name] = {
                                                                                                            type: typeNode,
                                                                                                            required: !!parameter.required
                                                                                                        }, _b)) })];
                                                                                            case "header":
                                                                                                return [2 /*return*/, __assign(__assign({}, prev), { header: __assign(__assign({}, prev.header), (_c = {}, _c[parameter.name] = {
                                                                                                            type: typeNode,
                                                                                                            required: !!parameter.required
                                                                                                        }, _c)) })];
                                                                                            case "path":
                                                                                                return [2 /*return*/, __assign(__assign({}, prev), { path: __assign(__assign({}, prev.path), (_d = {}, _d[parameter.name] = {
                                                                                                            type: typeNode,
                                                                                                            required: !!parameter.required
                                                                                                        }, _d)) })];
                                                                                            case "query":
                                                                                                return [2 /*return*/, __assign(__assign({}, prev), { query: __assign(__assign({}, prev.query), (_e = {}, _e[parameter.name] = {
                                                                                                            type: typeNode,
                                                                                                            required: !!parameter.required
                                                                                                        }, _e)) })];
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        });
                                                                    }, Promise.resolve({
                                                                        query: {},
                                                                        path: {},
                                                                        header: {},
                                                                        cookie: {}
                                                                    }))];
                                                                case 1:
                                                                    parameters = _e.sent();
                                                                    return [4 /*yield*/, refStore.resolve(operation.requestBody)];
                                                                case 2:
                                                                    requestBody = _e.sent();
                                                                    _a = pickMediaTypeSchema(requestBody === null || requestBody === void 0 ? void 0 : requestBody.content), mediaType = _a.mediaType, bodySchemaOrRef = _a.schema;
                                                                    console.log('hepp');
                                                                    return [4 /*yield*/, refStore.resolve(bodySchemaOrRef)];
                                                                case 3:
                                                                    bodySchema = _e.sent();
                                                                    if (!bodySchema)
                                                                        return [3 /*break*/, 5];
                                                                    return [4 /*yield*/, convertSchema(bodySchema, refStore)];
                                                                case 4:
                                                                    _b = _e.sent();
                                                                    return [3 /*break*/, 6];
                                                                case 5:
                                                                    _b = undefined;
                                                                    _e.label = 6;
                                                                case 6:
                                                                    body = _b;
                                                                    responseValues = Object.keys(operation.responses);
                                                                    isValidResponseValues = !!responseValues.find(function (responseValue) {
                                                                        return responseValue.match(/\d{3}/) || responseValue === "default";
                                                                    });
                                                                    if (!isValidResponseValues) {
                                                                        throw new Error("Unexpected response value in " + responseValues);
                                                                    }
                                                                    return [4 /*yield*/, Promise.all(responseValues.map(function (responseValue) {
                                                                            return __awaiter(_this, void 0, void 0, function () {
                                                                                var response, statusProperty, schema, returnType, _a, _b, contentPropertyName;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0: return [4 /*yield*/, refStore.resolve(operation.responses[responseValue])];
                                                                                        case 1:
                                                                                            response = _c.sent();
                                                                                            statusProperty = responseValue.match(/\d{3}/)
                                                                                                ? [
                                                                                                    ts.createPropertySignature(undefined, "status", undefined, ts.createLiteralTypeNode(ts.createNumericLiteral(responseValue)), undefined)
                                                                                                ]
                                                                                                : [
                                                                                                    ts.createPropertySignature(undefined, "status", undefined, ts.createTypeReferenceNode("Exclude", [
                                                                                                        ts.createTypeReferenceNode(ts.createQualifiedName(tsGenIdentifier, gen_ast_helpers_1.HttpStatusType), []),
                                                                                                        ts.createUnionTypeNode(responseValues
                                                                                                            .filter(function (r) { return r != responseValue; })
                                                                                                            .map(function (r) {
                                                                                                            if (r.match(/\d{3}/)) {
                                                                                                                return ts.createLiteralTypeNode(ts.createNumericLiteral(r));
                                                                                                            }
                                                                                                            throw new Error("Expected a numeric value here " + r);
                                                                                                        }))
                                                                                                    ]), 
                                                                                                    //ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
                                                                                                    undefined)
                                                                                                ];
                                                                                            if (!(response === null || response === void 0 ? void 0 : response.content)) {
                                                                                                return [2 /*return*/, ts.createTypeLiteralNode(statusProperty)];
                                                                                            }
                                                                                            schema = pickMediaTypeSchema(response.content).schema;
                                                                                            if (!schema)
                                                                                                return [3 /*break*/, 4];
                                                                                            _b = convertSchema;
                                                                                            return [4 /*yield*/, refStore.resolve(schema)];
                                                                                        case 2: return [4 /*yield*/, _b.apply(void 0, [_c.sent(), refStore])];
                                                                                        case 3:
                                                                                            _a = _c.sent();
                                                                                            return [3 /*break*/, 5];
                                                                                        case 4:
                                                                                            _a = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
                                                                                            _c.label = 5;
                                                                                        case 5:
                                                                                            returnType = _a;
                                                                                            contentPropertyName = responseValue.match(/\d{3}/) && parseInt(responseValue) >= 300
                                                                                                ? "error"
                                                                                                : "data";
                                                                                            return [2 /*return*/, ts.createTypeLiteralNode(__spreadArrays(statusProperty, [
                                                                                                    ts.createPropertySignature(undefined, contentPropertyName, undefined, returnType, undefined)
                                                                                                ]))];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }))];
                                                                case 7:
                                                                    returnTypes = _e.sent();
                                                                    endpointMethod = {
                                                                        queryParameters: parameters.query,
                                                                        pathParameters: parameters.path,
                                                                        headerParameters: parameters.header,
                                                                        cookieParameters: parameters.cookie,
                                                                        body: body,
                                                                        mediaType: mediaType,
                                                                        returnType: ts.createUnionTypeNode(returnTypes)
                                                                    };
                                                                    _c = [{}];
                                                                    return [4 /*yield*/, endpoint];
                                                                case 8: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), (_d = {}, _d[operation.type] = endpointMethod, _d)])];
                                                            }
                                                        });
                                                    });
                                                }, Promise.resolve({}))];
                                        case 1:
                                            endpoint = _c.sent();
                                            _a = [{}];
                                            return [4 /*yield*/, endpoints];
                                        case 2: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_c.sent())])), (_b = {}, _b[path] = endpoint, _b)])];
                                    }
                                });
                            });
                        }, Promise.resolve({}))];
                case 1:
                    endpoints = _a.sent();
                    return [2 /*return*/, endpoints];
            }
        });
    });
}
exports.openapiConverter = openapiConverter;
