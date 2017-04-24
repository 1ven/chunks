"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const RsWrap_1 = require("./RsWrap");
const RsEmpty_1 = require("./RsEmpty");
const RsSimple_1 = require("./RsSimple");
class RsWithBody extends RsWrap_1.RsWrap {
    constructor(a, b) {
        if (typeof a === 'string') {
            return new RsWithBody(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && typeof b === 'string') {
            super(new RsSimple_1.RsSimple(a.head(), b));
        }
        else {
            throw new Error('Wrong arguments');
        }
    }
}
exports.RsWithBody = RsWithBody;
