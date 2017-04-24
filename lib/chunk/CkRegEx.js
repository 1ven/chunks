"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
class CkRegEx {
    constructor(pathname, chunk) {
        this.pathname = pathname;
        this.chunk = chunk;
    }
    act(req) {
        if (req.head().uri !== this.pathname) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(req);
    }
}
exports.CkRegEx = CkRegEx;
