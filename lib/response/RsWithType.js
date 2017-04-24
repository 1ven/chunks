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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var index_1 = require("./index");
var RsWrap_1 = require("./RsWrap");
var RsEmpty_1 = require("./RsEmpty");
var RsSimple_1 = require("./RsSimple");
var RsWithType = (function (_super) {
    __extends(RsWithType, _super);
    function RsWithType(a, b) {
        var _this = this;
        if (typeof a === 'string') {
            return new RsWithType(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && typeof b === 'string') {
            // Use RsWithHeaders
            _this = _super.call(this, new RsSimple_1.RsSimple(_.merge({}, a.head(), {
                headers: {
                    'Content-Type': b,
                },
            }), a.body())) || this;
        }
        return _this;
    }
    return RsWithType;
}(RsWrap_1.RsWrap));
exports.RsWithType = RsWithType;
