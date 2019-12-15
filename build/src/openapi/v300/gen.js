"use strict";
exports.__esModule = true;
var ref_1 = require("./openapi/ref");
var ts = require("typescript");
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
        var _b = schemaToTypeNode(schemaOrRef.items, refs), recUnresolved = _b.unresolved, type = _b.type;
        return {
            unresolved: recUnresolved,
            type: ts.createArrayTypeNode(type)
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
