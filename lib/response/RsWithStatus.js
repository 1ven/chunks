"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var RsWrap_1 = require("./RsWrap");
var RsEmpty_1 = require("./RsEmpty");
var RsSimple_1 = require("./RsSimple");
var RsWithStatus = (function (_super) {
    __extends(RsWithStatus, _super);
    function RsWithStatus(a, b) {
        var _this = this;
        if (typeof a === 'number') {
            return new RsWithStatus(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && typeof b === 'number') {
            _this = _super.call(this, new RsSimple_1.RsSimple(__assign({}, a.head(), { status: b }), a.body())) || this;
        }
        return _this;
    }
    return RsWithStatus;
}(RsWrap_1.RsWrap));
exports.RsWithStatus = RsWithStatus;
