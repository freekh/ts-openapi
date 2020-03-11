"use strict";
exports.__esModule = true;
var typescript_1 = require("typescript");
var ts_morph_1 = require("ts-morph");
function refToName(ref) {
    return ref;
}
// function genMembers(properties: { readonly [ name: string ]: Ref | Schema }): TypeElement[] {
//   const members: TypeElement[] = Object.keys(properties).map(name => {
//     const property = properties[name]
//     const elem = ts.createPropertySignature([], name, undefined, ts.createKeywordTypeNode(SyntaxKind.NumberKeyword), undefined)
//     // console.log(elem)
//     printNode(elem)
//     return {} as TypeElement
//   })
//   return members
// }
// export function genTypes(schemas: { readonly [ref: string]: Schema }): TypeAliasDeclaration[] {
//   return Object.keys(schemas).map(ref => {
//     const schema = schemas[ref]
//     const name = refToName(ref)
//     const members = schema.properties ? genMembers(schema.properties) : []
//     return ts.createTypeAliasDeclaration(
//       [],
//       [],
//       name,
//       [],
//       ts.createTypeLiteralNode(members)
//     )
//   })
// }
function genMembers(properties) {
    var members = Object.keys(properties).map(function (name) {
        var property = properties[name];
        var elem = ts_morph_1.ts.createPropertySignature([], name, undefined, ts_morph_1.ts.createKeywordTypeNode(typescript_1.SyntaxKind.NumberKeyword), undefined);
        return elem;
    });
    return members;
}
function genTypes(schemas) {
    return Object.keys(schemas).map(function (ref) {
        var schema = schemas[ref];
        var name = refToName(ref);
        var members = schema.properties ? genMembers(schema.properties) : [];
        return ts_morph_1.createWrappedNode(ts_morph_1.ts.createTypeAliasDeclaration([], [], name, undefined, ts_morph_1.ts.createTypeLiteralNode(members))).getStructure();
    });
}
exports.genTypes = genTypes;
