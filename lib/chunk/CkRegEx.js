"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RqWithHead_1 = require("../request/RqWithHead");
const http_1 = require("../http");
class CkRegEx {
    constructor(regex, chunk) {
        this.regex = regex;
        this.chunk = chunk;
    }
    act(req) {
        const head = req.head();
        const { uri } = head;
        const str = uri[uri.length - 1] === '/' ? uri.slice(0, -1) : uri;
        if (!this.regex.test(str)) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(new RqWithHead_1.RqWithHead(req, {
            uri: uri.replace(this.regex, ''),
        }));
    }
}
exports.CkRegEx = CkRegEx;
