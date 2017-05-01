"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
class CkRegEx {
    constructor(regex, chunk) {
        this.regex = regex;
        this.chunk = chunk;
    }
    act(req) {
        const { uri } = req.head();
        const str = uri[uri.length - 1] === '/' ? uri.slice(0, -1) : uri;
        if (!this.regex.test(str)) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(req);
    }
}
exports.CkRegEx = CkRegEx;
