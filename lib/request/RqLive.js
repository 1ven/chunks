"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var http_1 = require("../http");
var RqLive = (function () {
    function RqLive(raw) {
        this.parsed = new http_1.ParsedRequest(raw).print();
    }
    RqLive.prototype.head = function () {
        return _.omit(this.parsed, ['body']);
    };
    RqLive.prototype.body = function () {
        return this.parsed.body;
    };
    return RqLive;
}());
exports.RqLive = RqLive;
