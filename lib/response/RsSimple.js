"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RsSimple = (function () {
    function RsSimple(head, body) {
        this.h = head;
        this.b = body;
    }
    RsSimple.prototype.head = function () {
        return this.h;
    };
    RsSimple.prototype.body = function () {
        return this.b;
    };
    return RsSimple;
}());
exports.RsSimple = RsSimple;
