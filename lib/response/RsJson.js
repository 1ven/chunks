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
var RsWithBody_1 = require("./RsWithBody");
var RsWithStatus_1 = require("./RsWithStatus");
var RsWithType_1 = require("./RsWithType");
var RsJson = (function (_super) {
    __extends(RsJson, _super);
    function RsJson(a, b) {
        var _this = this;
        if (index_1.isResponse(a) && isJson(b)) {
            return new RsJson(new RsWithBody_1.RsWithBody(a, JSON.stringify(b)));
        }
        else if (isJson(a)) {
            return new RsJson(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a)) {
            _this = _super.call(this, new RsWithType_1.RsWithType(new RsWithStatus_1.RsWithStatus(a, 200), 'json')) || this;
        }
        return _this;
    }
    return RsJson;
}(RsWrap_1.RsWrap));
exports.RsJson = RsJson;
function isJson(arg) {
    return _.isPlainObject(arg);
}
