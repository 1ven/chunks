"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RsWrap_1 = require("./RsWrap");
const RsEmpty_1 = require("./RsEmpty");
const RsSimple_1 = require("./RsSimple");
const index_1 = require("./index");
class RsWithBody extends RsWrap_1.RsWrap {
    constructor(a, b) {
        if (index_1.isResponseBody(a)) {
            return new RsWithBody(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && index_1.isResponseBody(b)) {
            super(new RsSimple_1.RsSimple(a.head(), b));
        }
        else {
            throw new Error('Wrong arguments');
        }
    }
}
exports.RsWithBody = RsWithBody;
