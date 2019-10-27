var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var yaml = require('js-yaml');
var fs = require('fs');
var debug = function (msg) {
    // console.log(msg)
};
function refToType(rawRef) {
    return rawRef.slice(21);
}
function isSpecialMap(type, schema) {
    return type.startsWith('Map_') && schema.type === 'object' && schema.properties.string;
}
function buildType(schemas, types, type, pathType) {
    var _a, _b, _c, _d;
    debug("Building type " + type);
    var schema = schemas[type];
    if (schema.type === 'array') {
        return buildType(schemas, __assign(__assign({}, types), (_a = {}, _a[type] = getType(schema), _a)), refToType(schema.items.$ref));
    }
    if (pathType && isSpecialMap(type, schema)) {
        var itemsSchema = schema.properties.string;
        if (itemsSchema.$ref) {
            return __assign(__assign({}, buildType(schemas, types, refToType(itemsSchema.$ref))), (_b = {}, _b[pathType] = {
                type: 'map',
                value: refToType(itemsSchema.$ref)
            }, _b));
        }
        else {
            return __assign(__assign({}, types), (_c = {}, _c[pathType] = {
                type: 'map',
                value: getType(itemsSchema)
            }, _c));
        }
    }
    else if (schema.type === 'object' && schema.properties) {
        return __assign(__assign(__assign({}, Object.keys(schema.properties).reduce(function (prevTypes, key) {
            var propSchema = schema.properties[key];
            if (propSchema.$ref) {
                return buildType(schemas, prevTypes, refToType(propSchema.$ref));
            }
            else if (propSchema.type === 'array' && propSchema.items.$ref) {
                return buildType(schemas, prevTypes, refToType(propSchema.items.$ref));
            }
            return prevTypes;
        }, {})), (_d = {}, _d[type] = {
            type: 'object',
            properties: Object.keys(schema.properties).map(function (key) {
                var propSchema = schema.properties[key];
                var required = schema.required.indexOf(key);
                if (propSchema.$ref) {
                    var type_1 = refToType(propSchema.$ref);
                    return {
                        name: key,
                        type: type_1,
                        required: required
                    };
                }
                return {
                    name: key,
                    type: getType(propSchema),
                    required: required
                };
            })
        }, _d)), types);
    }
    else {
        throw Error("Cannot build type: " + type + "\n" + JSON.stringify(schema, null, 2));
    }
}
function getType(schema) {
    debug("Deschemifying " + schema.type);
    if (schema.type === 'array') {
        if (schema.items.$ref) {
            return refToType(schema.items.$ref) + '[]';
        }
        else {
            return getType(schema.items) + '[]';
        }
    }
    else if (schema.type === 'string' && schema.format === 'date-time') {
        return 'DateTime';
    }
    else if (schema.type === 'string' && schema.format === 'date') {
        return 'Day';
    }
    else if (schema.type === 'string') {
        return 'string';
    }
    else if (schema.type === 'number') {
        return 'number';
    }
    else if (schema.type === 'integer') {
        return 'number';
    }
    else if (schema.type === 'boolean') {
        return 'boolean';
    }
    else {
        throw Error("Cannot handle schema " + JSON.stringify(schema, null, 2));
    }
}
function casifyPath(path) {
    return path.split('/').reduce(function (p, c) { return p.concat(c.split('-')); }, []).map(function (p) { return p.slice(0, 1).toUpperCase() + p.slice(1); }).join('');
}
var doc = yaml.safeLoad(fs.readFileSync('./openapi.yml', 'utf8'));
var schemas = doc.components.schemas;
var ast = Object.keys(doc.paths).reduce(function (_a, path) {
    var _b, _c, _d;
    var types = _a.types, paths = _a.paths;
    if (Object.keys(doc.paths[path]).length != 1) { // TODO: fix post, delete, ...
        throw Error('Not (yet) implemented: only "get" paths are currently supported');
    }
    var get = doc.paths[path].get;
    var schema = get.responses['200'].content['application/json'].schema;
    var pathType = casifyPath(path) + 'Response';
    var nextType = {};
    var responseType;
    if (schema.$ref) {
        var type = refToType(schema.$ref);
        if (isSpecialMap(type, schemas[type])) {
            responseType = pathType;
        }
        else {
            responseType = refToType(schema.$ref);
        }
        nextType = buildType(schemas, types, type, pathType);
    }
    else if (schema.type === 'array') {
        responseType = pathType;
        nextType = __assign(__assign({}, buildType(schemas, types, refToType(schema.items.$ref))), (_b = {}, _b[pathType] = getType(schema), _b));
    }
    else {
        responseType = pathType;
        nextType = (_c = {},
            _c[pathType] = getType(schema),
            _c);
    }
    var queryParameters = get.parameters.filter(function (p) { return p['in'] === 'query'; });
    if (get.parameters.length !== queryParameters.length) { // TODO: fix other params
        throw Error('Not (yet) implemented: parameters other than query parameters');
    }
    var nextPath = (_d = {},
        _d[path] = {
            pathType: path.slice(1, 2).toUpperCase() + casifyPath(path).slice(1) + 'Endpoint',
            methods: {
                get: {
                    description: get.description,
                    responseType: responseType,
                    queryParameters: queryParameters.reduce(function (prev, p) {
                        var _a;
                        return (__assign(__assign({}, prev), (_a = {}, _a[p.name] = {
                            description: p.description,
                            required: p.required,
                            type: getType(p.schema)
                        }, _a)));
                    }, {})
                }
            }
        },
        _d);
    return {
        types: __assign(__assign({}, types), nextType),
        paths: __assign(__assign({}, paths), nextPath)
    };
}, { types: {}, paths: {} });
var typesCode = Object.keys(ast.types).map(function (key) {
    var typeDef = ast.types[key];
    var typeDecl = "type " + key + " = ";
    if (typeDef.type === 'map') {
        typeDecl += "{ [str: string]: " + typeDef.value + " }";
    }
    else if (typeDef.type === 'object') {
        typeDecl += "{\n" + typeDef.properties.map(function (_a) {
            var name = _a.name, type = _a.type, required = _a.required;
            return "  " + name + (required ? '?' : '') + ": " + type;
        }).join(',\n') + "\n}";
    }
    else {
        typeDecl += typeDef;
    }
    return typeDecl;
}).join('\n');
var pathsSumTypeCode = 'type Paths = ' + Object.keys(ast.paths).map(function (path) {
    return "'" + path + "'";
}).join(' | ');
function pathSignature(pathASTMethod, bodyOrType) {
    return '(' + Object.keys(pathASTMethod.queryParameters)
        .sort(function (a, b) {
        var ap = pathASTMethod.queryParameters[a];
        var bp = pathASTMethod.queryParameters[b];
        if (ap.required && bp.required) {
            return 0;
        }
        else if (ap.required && !bp.required) {
            return -1;
        }
        else {
            return 1;
        }
    })
        .map(function (name) {
        var p = pathASTMethod.queryParameters[name];
        return "" + name + (p.required ? '' : '?') + ": " + p.type;
    }).join(', ') + (") => " + bodyOrType);
}
function pathTypeSignature(pathAST) {
    return "{\n" + (pathAST.methods.get.description ? "  /**\n" + pathAST.methods.get.description.split('\n').map(function (l) { return "   * " + l; }).join('\n') + "\n" + Object.keys(pathAST.methods.get.queryParameters).map(function (p) { return "   * @param " + (pathAST.methods.get.queryParameters[p].description ? p + " - " + pathAST.methods.get.queryParameters[p].description.split('\n').join(' ').split('|').join(' ') : ''); }).join('\n') + "\n  */\n   " : '   ') + "get: " + pathSignature(pathAST.methods.get, "Promise<AxiosResponse<" + pathAST.methods.get.responseType + ">>") + "\n}";
}
var pathTypesCode = Object.keys(ast.paths).map(function (path) {
    var pathAST = ast.paths[path];
    return "type " + pathAST.pathType + " = " + pathTypeSignature(pathAST);
}).join('\n');
var baseTypeCode = "\ntype ApiEndpoint<P extends Paths> =\n" + Object.keys(ast.paths).map(function (path) {
    var pathAST = ast.paths[path];
    return "  P extends '" + path + "' ? " + pathAST.pathType + " :";
}).join('\n') + "\n  never\n";
var apiCode = "\nfunction unknownPath(path: Paths): never {\n  throw Error('Unknown path ${path}')\n}\n\nfunction api<P extends Paths>(p: P): ApiEndpoint<P> {\n  switch(p) {\n" + Object.keys(ast.paths).map(function (path) {
    var pathAST = ast.paths[path];
    var get = pathAST.methods.get;
    var getParams = Object.keys(get.queryParameters).map(function (p) { return "                " + p; }).join(',\n');
    var getBody = "{\n          return axios\n            .get('" + path + "', {\n              params: { \n" + getParams + " \n              }\n            })\n            .then(response => {\n              return response as AxiosResponse<" + get.responseType + ">\n            })\n        }";
    return "    case '" + path + "':\n      return {\n        get: " + pathSignature(pathAST.methods.get, getBody) + "\n      } as " + pathAST.pathType + " as ApiEndpoint<P>";
}).join('\n') + "\n    default:\n      return unknownPath(p)\n  }\n}";
var dateTypes = "\ntype Day = Date & { readonly __tag: unique symbol }\ntype DateTime = Date & { readonly __tag: unique symbol }\n";
var imports = ["import axios, { AxiosResponse } from 'axios'"].join('\n');
var exportCode = "export default api";
var sep = '\n\n//---\n\n';
var code = imports + sep +
    dateTypes + sep +
    typesCode + sep +
    pathTypesCode + sep +
    pathsSumTypeCode + sep +
    baseTypeCode + sep +
    apiCode + sep +
    exportCode;
// console.log(baseTypeCode)
fs.writeFileSync('./test.ts', code);
