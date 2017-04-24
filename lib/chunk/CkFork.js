"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../http");
var CkFork = (function () {
    function CkFork() {
        var chunks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chunks[_i] = arguments[_i];
        }
        this.chunks = chunks;
    }
    CkFork.prototype.act = function (req) {
        for (var _i = 0, _a = this.chunks; _i < _a.length; _i++) {
            var chunk = _a[_i];
            try {
                return chunk.act(req);
            }
            catch (err) {
                if (!(err instanceof http_1.HttpError) ||
                    err.status !== 404) {
                    throw err;
                }
            }
        }
        throw new http_1.HttpError(404);
    };
    return CkFork;
}());
exports.CkFork = CkFork;
