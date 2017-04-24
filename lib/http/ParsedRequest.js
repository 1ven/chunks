"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Implement validations on HTTP 1.1 requests
var parser = require("http-string-parser");
var ParsedRequest = (function () {
    function ParsedRequest(raw) {
        this.raw = raw;
    }
    ParsedRequest.prototype.print = function () {
        return parser.parseRequest(this.raw);
    };
    return ParsedRequest;
}());
exports.ParsedRequest = ParsedRequest;
