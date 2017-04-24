"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../http");
var CkMethods = (function () {
    function CkMethods(methods, chunk) {
        this.methods = methods;
        this.chunk = chunk;
    }
    CkMethods.prototype.act = function (req) {
        var methods = this.methods.replace(/\s/g, '').split(',');
        if (methods.indexOf(req.head().method) === -1) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(req);
    };
    return CkMethods;
}());
exports.CkMethods = CkMethods;
