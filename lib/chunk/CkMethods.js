"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
class CkMethods {
    constructor(methods, chunk) {
        this.methods = methods;
        this.chunk = chunk;
    }
    act(req) {
        const methods = this.methods.replace(/\s/g, '').split(',');
        if (methods.indexOf(req.head().method) === -1) {
            throw new http_1.HttpError(404);
        }
        return this.chunk.act(req);
    }
}
exports.CkMethods = CkMethods;
