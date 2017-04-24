"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var _ = require("lodash");
var RawResponse = (function () {
    function RawResponse(res) {
        this.res = res;
    }
    RawResponse.prototype.print = function () {
        var _a = this.res.head(), status = _a.status, headers = _a.headers;
        var body = this.res.body();
        return (this.makeStatusLine(status) +
            this.makeHeaders(headers) +
            this.makeBody(body));
    };
    RawResponse.prototype.makeStatusLine = function (status) {
        return "HTTP/1.1 " + status + " " + http.STATUS_CODES[status];
    };
    RawResponse.prototype.makeHeaders = function (headers) {
        if (_.isUndefined(headers)) {
            return '';
        }
        return _.reduce(headers, function (acc, value, key) { return (acc + ("\n" + key + ": " + value)); }, '');
    };
    RawResponse.prototype.makeBody = function (body) {
        if (body === '') {
            return '';
        }
        return "\n\n" + body;
    };
    return RawResponse;
}());
exports.RawResponse = RawResponse;
