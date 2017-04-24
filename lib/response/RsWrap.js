"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RsWrap = (function () {
    function RsWrap(res) {
        this.origin = res;
    }
    RsWrap.prototype.head = function () {
        return this.origin.head();
    };
    RsWrap.prototype.body = function () {
        return this.origin.body();
    };
    return RsWrap;
}());
exports.RsWrap = RsWrap;
