"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
class CkFork {
    constructor(...chunks) {
        this.chunks = chunks;
    }
    act(req) {
        for (let chunk of this.chunks) {
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
    }
}
exports.CkFork = CkFork;
