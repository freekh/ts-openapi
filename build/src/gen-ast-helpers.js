"use strict";
exports.__esModule = true;
var ts = require("typescript");
/*******************************************************
 * Various TS AST helpers to avoid (too) messy code
 *******************************************************/
function delareTypeLiteralAlias(name, fields) {
    return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, ts.createTypeLiteralNode(Object.keys(fields).map(function (name) {
        var type = fields[name];
        return ts.createPropertySignature(undefined, name, undefined, type, undefined);
    })));
}
exports.delareTypeLiteralAlias = delareTypeLiteralAlias;
function createStringLitralType(name) {
    return ts.createLiteralTypeNode(ts.createStringLiteral(name));
}
exports.createStringLitralType = createStringLitralType;
function createTypeRereference(name) {
    return ts.createTypeReferenceNode(name, undefined);
}
exports.createTypeRereference = createTypeRereference;
function declareStringLiteralUnion(name, values) {
    return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, ts.createUnionTypeNode(values.map(createStringLitralType)));
}
exports.declareStringLiteralUnion = declareStringLiteralUnion;
/**
 * Example:
 * type ApiEndpoint<P extends Paths> =
 *   P extends '/string' ? { get(): string } :
 *   P extends '/number' ? { get(): number} :
 *   never
 *
 * @param name
 * @param typeParameterName
 * @param typeParameterConstraint
 * @param conditionals
 */
function declareConditionalNeverType(name, typeParameterName, typeParameterConstraint, conditionals) {
    var typeParameterRef = createTypeRereference(typeParameterConstraint.name.text);
    var typeParameter = ts.createTypeParameterDeclaration(typeParameterName, typeParameterRef);
    return ts.createTypeAliasDeclaration(undefined, undefined, name, [typeParameter], conditionals.reduce(function (prev, curr) {
        return ts.createConditionalTypeNode(createTypeRereference(typeParameterName), curr.left, curr.right, prev);
    }, ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)));
}
exports.declareConditionalNeverType = declareConditionalNeverType;
function createEndpoint(endpointDef, createChild) {
    return Object.keys(endpointDef).map(function (method) {
        var methodImpl = endpointDef[method];
        var params = Object.keys(methodImpl.parameters).map(function (param) { return ts.createParameter(undefined, undefined, undefined, param, undefined, methodImpl.parameters[param]); });
        return createChild(method, params, methodImpl.returns);
    });
}
function createEndpointType(endpointDef) {
    return ts.createTypeLiteralNode(createEndpoint(endpointDef, function (method, params, type) {
        return ts.createPropertySignature(undefined, method, undefined, ts.createFunctionTypeNode(undefined, params, type), undefined);
    }));
}
exports.createEndpointType = createEndpointType;
function declareType(name, node) {
    return ts.createTypeAliasDeclaration(undefined, undefined, name, undefined, node);
}
exports.declareType = declareType;
function createA() {
    //  const engineHandler = engine.init(host)
    return ts.createVariableStatement(undefined, ts.createVariableDeclarationList([
        ts.createVariableDeclaration('a', undefined, ts.createCall(ts.createPropertyAccess(ts.createIdentifier('engine'), ts.createIdentifier('init')), undefined, [
            ts.createIdentifier('host')
        ]))
    ]));
}
function createEndpointImplementation(endpointDef) {
    return ts.createObjectLiteral(createEndpoint(endpointDef, function (method, params, type) {
        return ts.createPropertyAssignment(method, ts.createArrowFunction(undefined, undefined, params, type, undefined, ts.createBlock([
            createA()
        ])));
    }));
}
function createPaths(endpointDefs, endpointDecl) {
    var pathTypeParam = ts.createTypeParameterDeclaration('P', ts.createTypeReferenceNode('Paths', undefined));
    var pathsTypeRef = ts.createTypeReferenceNode(pathTypeParam.name, undefined);
    var pathParam = 'p';
    var switchStmt = ts.createBlock([
        ts.createSwitch(ts.createIdentifier(pathParam), ts.createCaseBlock(Object.keys(endpointDefs).map(function (path) {
            return ts.createCaseClause(ts.createStringLiteral(path), [
                ts.createStatement(createEndpointImplementation(endpointDefs[path]))
            ]);
        }).concat(ts.createDefaultClause([]))))
    ]);
    return ts.createArrowFunction(undefined, [pathTypeParam], [ts.createParameter(undefined, undefined, undefined, pathParam, undefined, pathsTypeRef)], ts.createTypeReferenceNode(endpointDecl.name, [pathsTypeRef]), undefined, switchStmt);
}
exports.createPaths = createPaths;
function createPathFunction(endpointDefs, endpointDecl) {
    return ts.createVariableStatement([], [
        ts.createVariableDeclaration('path', undefined, createPaths(endpointDefs, endpointDecl))
    ]);
}
exports.createPathFunction = createPathFunction;
