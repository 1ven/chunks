"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Implement validations on HTTP 1.1 requests
const parser = require("http-string-parser");
class ParsedRequest {
    constructor(raw) {
        this.raw = raw;
    }
    print() {
        return parser.parseRequest(this.raw);
    }
}
exports.ParsedRequest = ParsedRequest;
