"use strict";
exports.__esModule = true;
var ts = require("typescript");
/*******************************************************
 * Various TS AST helpers to avoid messy code
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
 *
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
// export function createEndpointType(endpointDef: EndpointDef): ts.TypeLiteralNode {
//   return ts.createTypeLiteralNode(Object.keys(endpointDef).map(method => {
//     return 
//   }))
// }
// export function createEndpointImplementation(endpointDef: EndpointDef): ts.Statement[] {
//   return []
// }
