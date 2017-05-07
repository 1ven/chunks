"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const RqWrap_1 = require("./RqWrap");
class RqMatched extends RqWrap_1.RqWrap {
    constructor(origin, params, rest) {
        super(origin);
        this.p = params;
        this.r = rest;
    }
    params() {
        return this.p;
    }
    rest() {
        return this.r;
    }
}
exports.RqMatched = RqMatched;
function isRouteRequest(arg) {
    return index_1.isRequest(arg) && !!arg.rest && !!arg.params;
}
exports.isRouteRequest = isRouteRequest;
