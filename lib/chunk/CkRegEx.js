"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../http");
var CkRegEx = (function () {
    function CkRegEx(pathname, chunk) {
        this.pathname = pathname;
        this.chunk = chunk;
    }
    CkRegEx.prototype.act = function (req) {
        if (req.head().uri !== this.pathname) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(req);
    };
    return CkRegEx;
}());
exports.CkRegEx = CkRegEx;
