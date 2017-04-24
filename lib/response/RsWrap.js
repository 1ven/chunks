"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RsWrap {
    constructor(res) {
        this.origin = res;
    }
    head() {
        return this.origin.head();
    }
    body() {
        return this.origin.body();
    }
}
exports.RsWrap = RsWrap;
