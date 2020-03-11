"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 8080;
var assetsConfig = {
    root: 'src/assets'
};
app.get('/', function (_, res) {
    res.sendFile('index.html', { root: assetsConfig.root });
});
app.get('/style.css', function (_, res) {
    res.sendFile('style.css', { root: assetsConfig.root });
});
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
