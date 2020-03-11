"use strict";
exports.__esModule = true;
var OnlyBodyOrFullResponse;
(function (OnlyBodyOrFullResponse) {
    OnlyBodyOrFullResponse["OnlyBody"] = "only-body";
    OnlyBodyOrFullResponse["FullResponse"] = "full-response";
})(OnlyBodyOrFullResponse = exports.OnlyBodyOrFullResponse || (exports.OnlyBodyOrFullResponse = {}));
// TODO: something more performant (use lib?). Move reg exp to somewhere outside hotpath?
function pathReplace(path, replacements) {
    return Object.keys(replacements).reduce(function (path, key) {
        var re = new RegExp("{" + key + "}", "g");
        return path.replace(re, replacements[key]);
    }, path);
}
exports.pathReplace = pathReplace;
exports.HttpStatus = [
    100,
    101,
    102,
    103,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    226,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410,
    411,
    412,
    413,
    414,
    415,
    416,
    417,
    421,
    422,
    423,
    424,
    425,
    426,
    427,
    428,
    429,
    430,
    431,
    451,
    500,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    509,
    510,
    511
];
// We could do something like this, but it seems more complicated, will it be faster or slower to compile, what to do about headers (this seems solvable but still)...
// type PromiseOf<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
// type FullResponseOf<Headers extends object, Response, T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<{ headers: Headers; data: ReturnType<T>, engineResponse: Response }>;
// type FunctionObject = {
//   [name: string]: (...args: any[]) => any
// };
// export type OnlyBodyPromiseOf<U extends FunctionObject> = {
//   [N in keyof U]: PromiseOf<U[N]>
// }
// export type FullResponsePromiseOf<T extends FunctionObject, Response, Headers extends object> = {
//   [P in keyof T]: FullResponseOf<Headers, Response, T[P]>
// }
function unknownPath(paths, path) {
    throw Error("Unknown path " + path + ". Valid paths are: " + paths.join(","));
}
exports.unknownPath = unknownPath;
// TODO: remember to flatten status unless in HttpStatus values to closest 100 (ref Hamberg)
var AxiosEngine = /** @class */ (function () {
    function AxiosEngine(config) {
        this.config = config;
    }
    AxiosEngine.prototype.cookieValueEncode = function (cookieValue) {
        return "" + cookieValue;
    };
    AxiosEngine.prototype.init = function (host) {
        throw new Error("Method not implemented.");
    };
    AxiosEngine.prototype.handler = function (engine) {
        throw new Error("Method not implemented.");
    };
    AxiosEngine.prototype.process = function (response) {
        throw new Error("Method not implemented.");
    };
    return AxiosEngine;
}());
exports.AxiosEngine = AxiosEngine;
