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
exports.__esModule = true;
var ts = require("typescript");
/*******************************************************
 * Various TS AST helpers to avoid (too) messy code
 *******************************************************/
var EndpointName = "Endpoint";
var PathsName = "Paths";
var OnlyBodyOrFullResponseShortName = "OBFR";
var PathsTypeShortName = "P";
var PathsVariableShortName = "p";
var ResponseTypeParameterName = "Response";
var OnlyBodyOrFullResponseName = "OnlyBodyOrFullResponse";
var OnlyBodyName = "OnlyBody";
var AllPathsName = "allPaths";
var OnlyBodyOrFullResponseParamName = "onlyBodyOrFullResponse";
var PathReplacementFunctionName = "pathReplace";
var CookieEncodeName = "cookieValueEncode";
exports.HttpStatusType = "HttpStatus";
function declareTypeLiteralAlias(name, fields) {
    return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, ts.createTypeLiteralNode(Object.keys(fields).map(function (name) {
        var type = fields[name];
        return ts.createPropertySignature(undefined, name, undefined, type, undefined);
    })));
}
exports.declareTypeLiteralAlias = declareTypeLiteralAlias;
function createStringLiteralType(name) {
    return ts.createLiteralTypeNode(ts.createStringLiteral(name));
}
exports.createStringLiteralType = createStringLiteralType;
function createTypeReference(name) {
    return ts.createTypeReferenceNode(name, undefined);
}
exports.createTypeReference = createTypeReference;
function declareStringLiteralUnion(name, values) {
    return ts.createTypeAliasDeclaration(undefined, ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export), name, undefined, ts.createUnionTypeNode(values.map(createStringLiteralType)));
}
function declareConditionalNeverType(typeRef, conditionals) {
    return conditionals.reverse().reduce(function (prev, curr) {
        return ts.createConditionalTypeNode(typeRef, curr.left, curr.right, prev);
    }, ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword));
}
// TODO: fugly
function capitalizeAround(c, s) {
    var _a = s.split(c), head = _a[0], tail = _a.slice(1);
    return [head]
        .concat(tail.map(function (p) { return p.slice(0, 1).toUpperCase() + p.slice(1); }))
        .join("");
}
function escapeParamIdentifier(id) {
    // TODO:
    /*There are reserved characters, that have a reserved meanings, those are delimiters — :/?#[]@ — and subdelimiters — !$&'()*+,;=
  
    There is also a set of characters called unreserved characters — alphanumerics and -._~ — which are not to be encoded.
  
  That means, that anything that doesn't belong to unreserved characters set is supposed to be %-encoded, when they do not have special meaning (e.g. when passed as a part of GET parameter). */
    return ts.createIdentifier(capitalizeAround("_", capitalizeAround("-", id)));
}
function createEndpoint(endpointDef, createChild) {
    return Object.keys(endpointDef).map(function (method) {
        var methodImpl = endpointDef[method];
        var pathParams = Object.keys(methodImpl.pathParameters).map(function (param) {
            return (__assign(__assign({}, ts.createParameter(undefined, undefined, undefined, escapeParamIdentifier(param), !methodImpl.pathParameters[param].required
                ? ts.createToken(ts.SyntaxKind.QuestionToken)
                : undefined, methodImpl.pathParameters[param].type)), { urlName: param }));
        });
        var queryParams = Object.keys(methodImpl.queryParameters).map(function (param) {
            return (__assign(__assign({}, ts.createParameter(undefined, undefined, undefined, escapeParamIdentifier(param), !methodImpl.queryParameters[param].required
                ? ts.createToken(ts.SyntaxKind.QuestionToken)
                : undefined, methodImpl.queryParameters[param].type)), { urlName: param }));
        });
        var headerParams = Object.keys(methodImpl.headerParameters).map(function (param) {
            return (__assign(__assign({}, ts.createParameter(undefined, undefined, undefined, escapeParamIdentifier(param), !methodImpl.headerParameters[param].required
                ? ts.createToken(ts.SyntaxKind.QuestionToken)
                : undefined, methodImpl.headerParameters[param].type)), { urlName: param }));
        });
        var cookieParams = Object.keys(methodImpl.cookieParameters).map(function (param) {
            return (__assign(__assign({}, ts.createParameter(undefined, undefined, undefined, escapeParamIdentifier(param), !methodImpl.cookieParameters[param].required
                ? ts.createToken(ts.SyntaxKind.QuestionToken)
                : undefined, methodImpl.cookieParameters[param].type)), { urlName: param }));
        });
        var params = pathParams.concat(queryParams, cookieParams, headerParams);
        return createChild(method, methodImpl.mediaType, params, queryParams, headerParams, cookieParams, Object.keys(methodImpl.pathParameters).map(function (param) {
            return escapeParamIdentifier(param);
        }), methodImpl.returnType);
    });
}
function createPathsTypeAlias(endpoints) {
    return declareStringLiteralUnion(PathsName, Object.keys(endpoints));
}
exports.createPathsTypeAlias = createPathsTypeAlias;
function createOnlyBodyEndpointTypeNode(tsGenIdentifier, endpoints) {
    return declareConditionalNeverType(ts.createTypeReferenceNode(PathsTypeShortName, undefined), Object.keys(endpoints).map(function (path) {
        return {
            left: createStringLiteralType(path),
            right: createOnlyBodyEndpointTypeLiteral(endpoints[path])
        };
    }));
}
exports.createOnlyBodyEndpointTypeNode = createOnlyBodyEndpointTypeNode;
function createFullResponseEndpointTypeNode(tsGenIdentifier, endpoints, responseTypeParameterName) {
    return declareConditionalNeverType(ts.createTypeReferenceNode(PathsTypeShortName, undefined), Object.keys(endpoints).map(function (path) {
        return {
            left: createStringLiteralType(path),
            right: createFullResponseEndpointTypeLiteral(endpoints[path])
        };
    }));
}
exports.createFullResponseEndpointTypeNode = createFullResponseEndpointTypeNode;
function createEndpointTypeAlias(tsGenIdentifier, pathsTypeStmt, endpoints) {
    var responseTypeParameterName = ResponseTypeParameterName;
    var typeParameters = [
        ts.createTypeParameterDeclaration(responseTypeParameterName),
        ts.createTypeParameterDeclaration(OnlyBodyOrFullResponseShortName, ts.createTypeReferenceNode(onlyBodyOrFullResponseQN(tsGenIdentifier), undefined)),
        ts.createTypeParameterDeclaration(PathsTypeShortName, ts.createTypeReferenceNode(pathsTypeStmt.name, undefined))
    ];
    return ts.createTypeAliasDeclaration(undefined, ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export), EndpointName, typeParameters, declareConditionalNeverType(ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, undefined), [
        {
            left: ts.createTypeReferenceNode(onlyBodyQN(tsGenIdentifier), undefined),
            right: createOnlyBodyEndpointTypeNode(tsGenIdentifier, endpoints)
        },
        {
            left: ts.createTypeReferenceNode(fullResponseQN(tsGenIdentifier), undefined),
            right: createFullResponseEndpointTypeNode(tsGenIdentifier, endpoints, responseTypeParameterName)
        }
    ]));
}
exports.createEndpointTypeAlias = createEndpointTypeAlias;
function promiseOf(type) {
    return ts.createTypeReferenceNode("Promise", [type]);
}
function onlyBodyType(type) {
    return promiseOf(type);
}
function createOnlyBodyEndpointTypeLiteral(endpointDef) {
    return ts.createTypeLiteralNode(createEndpoint(endpointDef, function (method, _, params, _queryParams, _headerParams, _cookieParams, _pathReplacements, type) {
        return ts.createPropertySignature(undefined, method, undefined, ts.createFunctionTypeNode(undefined, params, onlyBodyType(type)), undefined);
    }));
}
exports.createOnlyBodyEndpointTypeLiteral = createOnlyBodyEndpointTypeLiteral;
function fullResponseType(type, returnHeaders) {
    var headerPS = returnHeaders
        ? [
            ts.createPropertySignature(undefined, "headers", undefined, returnHeaders, undefined)
        ]
        : [
            ts.createPropertySignature(undefined, "headers", undefined, ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword), undefined)
        ];
    return promiseOf(ts.createTypeLiteralNode([
        ts.createPropertySignature(undefined, "response", undefined, ts.createTypeReferenceNode(ResponseTypeParameterName, []), undefined),
        ts.createPropertySignature(undefined, "data", undefined, type, undefined)
    ].concat(headerPS)));
}
function createFullResponseEndpointTypeLiteral(endpointDef) {
    return ts.createTypeLiteralNode(createEndpoint(endpointDef, function (method, _responseType, params, _queryParams, _headerParams, _cookieParams, _pathReplacements, type) {
        return ts.createPropertySignature(undefined, method, undefined, ts.createFunctionTypeNode(undefined, params, fullResponseType(type, endpointDef[method].responseHeaders)), undefined);
    }));
}
exports.createFullResponseEndpointTypeLiteral = createFullResponseEndpointTypeLiteral;
function createConstStatement(name, expr) {
    return ts.createVariableStatement(undefined, ts.createVariableDeclarationList([ts.createVariableDeclaration(name, undefined, expr)], ts.NodeFlags.Const));
}
function declareType(name, node) {
    return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, node);
}
exports.declareType = declareType;
function createEngineCall(engineProcess, engineIdentifier, handleIdentifier, tsGenIdentifier, method, responseType, pathIdentifier, pathReplacements, queryParams, headerParams, cookieParams) {
    // TODO: how to do filter & map with type narrowing?
    var queryParamAssignments = [];
    queryParams.forEach(function (p) {
        if (ts.isIdentifier(p.name)) {
            queryParamAssignments.push(ts.createShorthandPropertyAssignment(p.name));
        }
        else {
            throw Error("Expected only identifiers here: " + JSON.stringify(queryParams));
        }
    });
    var header = [];
    header.push(ts.createPropertyAssignment(ts.createStringLiteral("Content-Type"), ts.createStringLiteral(responseType)));
    if (cookieParams.length > 0) {
        // TODO: FUGLY!!!
        var templateHead = ts.createTemplateHead(cookieParams[0].urlName + "=");
        var templateMiddleSpans = cookieParams
            .slice(0, cookieParams.length - 1)
            .map(function (param, i) {
            return ts.createTemplateSpan(ts.createCall(ts.createPropertyAccess(engineIdentifier, ts.createIdentifier(CookieEncodeName)), [], [param.name]), ts.createTemplateMiddle(";" + cookieParams[i + 1].urlName + "="));
        });
        var templateTail = ts.createTemplateSpan(ts.createCall(ts.createPropertyAccess(engineIdentifier, ts.createIdentifier(CookieEncodeName)), [], [cookieParams[cookieParams.length - 1].name]), ts.createTemplateTail(";"));
        header.push(ts.createPropertyAssignment("Cookie", ts.createTemplateExpression(templateHead, templateMiddleSpans.concat(templateTail))));
    }
    header.push(ts.createSpreadAssignment(ts.createObjectLiteral(headerParams.map(function (p) {
        if (ts.isIdentifier(p.name)) {
            return ts.createPropertyAssignment(ts.createStringLiteral(p.urlName), p.name);
        }
        else {
            throw Error("Expected only identifiers here: " + JSON.stringify(headerParams));
        }
    }))));
    var pathExpr = pathReplacements.length == 0
        ? pathIdentifier
        : ts.createCall(ts.createPropertyAccess(tsGenIdentifier, ts.createIdentifier(PathReplacementFunctionName)), [], [
            pathIdentifier,
            ts.createObjectLiteral(pathReplacements.map(function (pathReplacement) {
                return ts.createShorthandPropertyAssignment(pathReplacement);
            }))
        ]);
    return ts.createCall(engineProcess, undefined, [
        ts.createCall(handleIdentifier, undefined, [
            ts.createStringLiteral(method),
            pathExpr,
            ts.createObjectLiteral(queryParamAssignments),
            ts.createObjectLiteral(header)
        ])
    ]);
}
function convertTypeDeclarationToRef(node) {
    return ts.createTypeReferenceNode(node.name, undefined);
}
function createEndpointImplementation(engineProcess, engineIdentifier, handleIdentifier, tsGenIdentifier, endpointDef, responseTypeRef, onlyBody, onlyDataOrFullResponseTypeRef, pathsTypeRef, pathIdentifier) {
    return ts.createAsExpression(ts.createObjectLiteral(createEndpoint(endpointDef, function (method, responseType, params, queryParams, headerParams, cookieParams, pathReplacements, type) {
        return ts.createPropertyAssignment(method, ts.createArrowFunction(undefined, undefined, params, onlyBody
            ? onlyBodyType(type)
            : fullResponseType(type, endpointDef[method].responseHeaders), undefined, createEngineCall(engineProcess, engineIdentifier, handleIdentifier, tsGenIdentifier, method, responseType, pathIdentifier, pathReplacements, queryParams, headerParams, cookieParams)));
    })), ts.createTypeReferenceNode(EndpointName, [
        responseTypeRef,
        onlyDataOrFullResponseTypeRef,
        pathsTypeRef
    ]));
}
function createPaths(engineProcess, engineIdentifier, tsGenIdentifier, handleIdentifier, responseTypeRef, onlyDataOrFullResponseTypeRef, endpointDefs, endpointDecl) {
    // TODO: is this or the QualifiedName the right way of accessing OnlyBody
    var onlyBodyProperty = ts.createPropertyAccess(ts.createPropertyAccess(tsGenIdentifier, OnlyBodyOrFullResponseName), OnlyBodyName);
    var pathTypeParam = ts.createTypeParameterDeclaration(PathsTypeShortName, ts.createTypeReferenceNode(PathsName, undefined));
    var obfrTypeParam = ts.createTypeParameterDeclaration(OnlyBodyOrFullResponseShortName, ts.createTypeReferenceNode(onlyBodyOrFullResponseQN(tsGenIdentifier), undefined));
    var pathsTypeRef = convertTypeDeclarationToRef(pathTypeParam);
    var pathIdentifier = ts.createIdentifier(PathsVariableShortName);
    function switchStmt(onlyBody) {
        return ts.createSwitch(pathIdentifier, ts.createCaseBlock(Object.keys(endpointDefs)
            .map(function (path) {
            return ts.createCaseClause(ts.createStringLiteral(path), [
                ts.createReturn(createEndpointImplementation(engineProcess, engineIdentifier, handleIdentifier, tsGenIdentifier, endpointDefs[path], responseTypeRef, onlyBody, onlyDataOrFullResponseTypeRef, pathsTypeRef, pathIdentifier))
            ]);
        })
            .concat(ts.createDefaultClause([
            ts.createReturn(ts.createCall(ts.createPropertyAccess(tsGenIdentifier, "unknownPath"), undefined, [
                ts.createIdentifier(AllPathsName),
                ts.createIdentifier(PathsVariableShortName)
            ]))
        ]))));
    }
    var switchStmts = ts.createIf(ts.createStrictEquality(ts.createIdentifier(OnlyBodyOrFullResponseParamName), onlyBodyProperty), switchStmt(true), switchStmt(false));
    return ts.createArrowFunction(undefined, [pathTypeParam, obfrTypeParam], [
        ts.createParameter(undefined, undefined, undefined, pathIdentifier.text, undefined, pathsTypeRef),
        ts.createParameter(undefined, undefined, undefined, OnlyBodyOrFullResponseParamName, undefined, ts.createTypeReferenceNode(onlyBodyOrFullResponseQN(tsGenIdentifier), undefined), onlyBodyProperty)
    ], ts.createTypeReferenceNode(endpointDecl.name, [
        ts.createTypeReferenceNode(ResponseTypeParameterName, undefined),
        ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, undefined),
        pathsTypeRef
    ]), undefined, ts.createBlock([switchStmts]));
}
exports.createPaths = createPaths;
function onlyBodyOrFullResponseQN(engineId) {
    return ts.createQualifiedName(engineId, OnlyBodyOrFullResponseName);
}
function onlyBodyQN(engineId) {
    return ts.createQualifiedName(onlyBodyOrFullResponseQN(engineId), OnlyBodyName // TODO: read from engine
    );
}
function fullResponseQN(engineId) {
    return ts.createQualifiedName(onlyBodyOrFullResponseQN(engineId), "FullResponse" // TODO: read from engine
    );
}
function createApiFunction(tsGenIdentifier, endpointDefs, endpointDecl) {
    var engineHandlerTypeDecl = ts.createTypeParameterDeclaration("EngineHandler");
    var responseTypeDecl = ts.createTypeParameterDeclaration(ResponseTypeParameterName);
    var onlyDataOrFullResponseTypeDecl = ts.createTypeParameterDeclaration(OnlyBodyOrFullResponseShortName);
    var hostParam = ts.createParameter([], [], undefined, "host", undefined, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword));
    var engineParam = ts.createParameter([], [], undefined, "engine", undefined, ts.createTypeReferenceNode(
    // TODO: read from engine
    ts.createQualifiedName(tsGenIdentifier, ts.createIdentifier("Engine")), [
        convertTypeDeclarationToRef(engineHandlerTypeDecl),
        convertTypeDeclarationToRef(responseTypeDecl)
    ]));
    var pathName = "path";
    var handleName = "handle";
    var engineIdentifier = ts.createIdentifier("engine");
    var pathDeclaration = createConstStatement(pathName, createPaths(
    // TODO: read from engine
    ts.createPropertyAccess(engineIdentifier, ts.createIdentifier("process")), engineIdentifier, tsGenIdentifier, ts.createIdentifier(handleName), convertTypeDeclarationToRef(responseTypeDecl), convertTypeDeclarationToRef(onlyDataOrFullResponseTypeDecl), endpointDefs, endpointDecl));
    var apiReturnType = ts.createTypeLiteralNode([
        ts.createPropertySignature(undefined, // modifiers
        pathName, undefined, // questionToken
        ts.createFunctionTypeNode([
            ts.createTypeParameterDeclaration(PathsTypeShortName, ts.createTypeReferenceNode(PathsName, []), undefined),
            ts.createTypeParameterDeclaration(OnlyBodyOrFullResponseShortName, ts.createTypeReferenceNode(onlyBodyOrFullResponseQN(tsGenIdentifier), []), ts.createTypeReferenceNode(onlyBodyQN(tsGenIdentifier), []))
        ], [
            ts.createParameter(undefined, undefined, undefined, PathsVariableShortName, undefined, ts.createTypeReferenceNode(PathsTypeShortName, [])),
            ts.createParameter(undefined, undefined, undefined, OnlyBodyOrFullResponseParamName, ts.createToken(ts.SyntaxKind.QuestionToken), ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, []))
        ], ts.createTypeReferenceNode(endpointDecl.name, [
            ts.createTypeReferenceNode(ResponseTypeParameterName, []),
            ts.createTypeReferenceNode(OnlyBodyOrFullResponseShortName, []),
            ts.createTypeReferenceNode(PathsTypeShortName, [])
        ])), undefined)
    ]);
    var engineHandlerName = "engineHandler";
    var engineHandlerDeclaration = createConstStatement(engineHandlerName, ts.createCall(ts.createPropertyAccess(ts.createIdentifier("engine"), "init"), [], [ts.createIdentifier("host")]));
    var handleDeclaration = createConstStatement(handleName, ts.createCall(ts.createPropertyAccess(ts.createIdentifier("engine"), "handler"), [], [ts.createIdentifier(engineHandlerName)]));
    var functionDeclaration = ts.createFunctionDeclaration(undefined, // decorators
    ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export), undefined, // asteriskToken
    "api", [engineHandlerTypeDecl, responseTypeDecl], [hostParam, engineParam], apiReturnType, ts.createBlock([
        engineHandlerDeclaration,
        handleDeclaration,
        pathDeclaration,
        ts.createReturn(ts.createObjectLiteral([
            ts.createPropertyAssignment(pathName, ts.createIdentifier(pathName))
        ]))
    ]));
    return functionDeclaration;
}
exports.createApiFunction = createApiFunction;
function createAllPathsVariable(endpointDefs) {
    return ts.createVariableStatement(ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export), ts.createVariableDeclarationList([
        ts.createVariableDeclaration(AllPathsName, undefined, ts.createArrayLiteral(Object.keys(endpointDefs).map(function (path) {
            return ts.createStringLiteral(path);
        })))
    ], ts.NodeFlags.Const));
}
exports.createAllPathsVariable = createAllPathsVariable;
