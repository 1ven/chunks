"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const _ = require("lodash");
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
        if (body === '') {
            return '';
        }
        return `\n\n${body}`;
    }
}
exports.RawResponse = RawResponse;
