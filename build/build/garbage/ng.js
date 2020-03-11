"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var paths = ['/test1', '/test2'];
//---
function unknownPath(path) {
    throw Error("Unknown path " + path + ". Valid paths are: " + paths.join(','));
}
// Or FullResponse or WithResponseData (full, data-only) or OnlyDataOrFullResponse
var Complete;
(function (Complete) {
    Complete["On"] = "on";
    Complete["Off"] = "off";
})(Complete || (Complete = {}));
function api(host, engine) {
    var engineHandler = engine.init(host);
    var handle = engine.handler(engineHandler);
    var path = function (p, complete) {
        if (complete === void 0) {
            complete = Complete.Off;
        }
        if (complete == Complete.On) {
            switch (p) {
                case '/test1':
                    return {
                        get: function (id) {
                            return engine.process(handle('get', 'application/json', p, { id: id }));
                        }
                    };
                case '/test2':
                    return {
                        get: function (id, from, to, limit) {
                            return engine.process(handle('get', 'application/json', p, { id: id, from: from, to: to, limit: limit }));
                        }
                    };
                default:
                    return unknownPath(p);
            }
        }
        else {
            switch (p) {
                case '/test1':
                    return {
                        get: function (id) {
                            return engine.process(handle('get', 'application/json', p, { id: id }));
                        }
                    };
                case '/test2':
                    return {
                        get: function (id, from, to, limit) {
                            return engine.process(handle('get', 'application/json', p, { id: id, from: from, to: to, limit: limit }));
                        }
                    };
                default:
                    return unknownPath(p);
            }
        }
    };
    // const methods = {
    //   getTest1: (id: string[]): Promise<Test1Response> => {
    //     return path('/test1', Complete.Off).get(id)
    //   }
    // }
    return {
        path: path
    };
}
// //---
var AxiosEngine = /** @class */ (function () {
    function AxiosEngine(config) {
        this.config = config;
    }
    AxiosEngine.prototype.handler = function (engine) {
        throw new Error("Method not implemented.");
    };
    AxiosEngine.prototype.init = function (host) {
        return axios_1["default"].create(this.config);
    };
    AxiosEngine.prototype.process = function (response) {
        response.data;
        throw new Error("Method not implemented.");
    };
    return AxiosEngine;
}());
//
var a = api('http://localhost/server', new AxiosEngine());
a.path('/test1', Complete.On).get('').then(function (d) { return d; });
exports["default"] = api;
