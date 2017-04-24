"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const http_1 = require("../http");
class RqLive {
    constructor(raw) {
        this.parsed = new http_1.ParsedRequest(raw).print();
    }
    head() {
        return _.omit(this.parsed, ['body']);
    }
    body() {
        return this.parsed.body;
    }
}
exports.RqLive = RqLive;
