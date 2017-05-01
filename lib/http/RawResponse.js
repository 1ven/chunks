"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const _ = require("lodash");
const body_1 = require("./body");
class RawResponse {
    constructor(res) {
        this.res = res;
    }
    print() {
        const { status, headers } = this.res.head();
        const body = this.res.body();
        return (this.makeStatusLine(status) +
            this.makeHeaders(headers) +
            this.makeBody(body));
    }
    makeStatusLine(status) {
        return `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}`;
    }
    makeHeaders(headers) {
        if (_.isUndefined(headers)) {
            return '';
        }
        return _.reduce(headers, (acc, value, key) => (acc + `\n${key}: ${value}`), '');
    }
    makeBody(body) {
        const format = (s) => `\n\n${s}`;
        const { headers } = this.res.head();
        const ct = headers && headers['Content-Type'];
        const types = {
            'json': body_1.JsonBody,
            'xml': body_1.XmlBody,
        };
        if (_.isNull(body)) {
            return '';
        }
        if (ct && _.keys(types).indexOf(ct) !== -1) {
            return format(new types[ct](body).print());
        }
        return format(new body_1.RawBody(body).print());
    }
}
exports.RawResponse = RawResponse;
