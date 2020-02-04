"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var paths = ['/test1', '/test2'];
{
    get: (function (id, from, to, limit) { return Promise(); });
}
//---
function unknownPath(path) {
    throw Error("Unknown path " + path + ". Valid paths are: " + paths.join(','));
}
// Or FullResponse or WithResponseData (full, data-only)
var Complete;
(function (Complete) {
    Complete["On"] = "on";
    Complete["Off"] = "off";
})(Complete || (Complete = {}));
function api(host, engine) {
    var engineHandler = engine.init(host);
    var handle = engine.handler(engineHandler);
    var path = function (p, complete) {
        if (complete === void 0) { complete = Complete.Off; }
        if (complete == Complete.On) {
            switch (p) {
                case '/test1':
                    return {
                        get: function (id) {
                            return engine.process(handle('application/json', 'get', p, { id: id }));
                        }
                    };
                case '/test2':
                    return {
                        get: function (id, from, to, limit) {
                            return engine.process(handle('application/json', 'get', p, { id: id, from: from, to: to, limit: limit }));
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
                            return engine.process(handle('application/json', 'get', p, { id: id }));
                        }
                    };
                case '/test2':
                    return {
                        get: function (id, from, to, limit) {
                            return engine.process(handle('application/json', 'get', p, { id: id, from: from, to: to, limit: limit }));
                        }
                    };
                default:
                    return unknownPath(p);
            }
        }
    };
    return {
        // methods: {
        //   getTest1(id?: string[]) {
        //     return path('/test1').get(id)
        //   }
        // },
        path: path
    };
}
// //---
var AxiosEngine = /** @class */ (function () {
    function AxiosEngine(config) {
        this.config = config;
    }
    AxiosEngine.prototype.init = function (host) {
        return axios_1["default"].create(this.config);
    };
    AxiosEngine.prototype.handler = function (engine) {
        engine.put;
        throw new Error();
    };
    AxiosEngine.prototype.process = function (response) {
        response.data;
        throw new Error("Method not implemented.");
    };
    return AxiosEngine;
}());
api('test', new AxiosEngine()).path('/test1', Complete.On).get([]);
exports["default"] = api;
