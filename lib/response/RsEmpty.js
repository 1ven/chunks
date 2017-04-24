"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RsEmpty = (function () {
    function RsEmpty() {
    }
    RsEmpty.prototype.head = function () {
        return {
            status: 200,
        };
    };
    RsEmpty.prototype.body = function () {
        return '';
    };
    return RsEmpty;
}());
exports.RsEmpty = RsEmpty;
