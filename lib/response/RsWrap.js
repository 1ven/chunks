"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RsWrap {
    constructor(origin) {
        this.origin = origin;
    }
    head() {
        return this.origin.head();
    }
    body() {
        return this.origin.body();
    }
}
exports.RsWrap = RsWrap;
