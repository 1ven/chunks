"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../../http");
class PrJson {
    constructor(req) {
        this.req = req;
    }
    content() {
        try {
            return JSON.parse(this.req.body());
        }
        catch (err) {
            throw new http_1.HttpError(400, 'JSON is not valid');
        }
    }
}
exports.PrJson = PrJson;
