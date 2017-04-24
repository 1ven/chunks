"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const RsWrap_1 = require("./RsWrap");
const RsEmpty_1 = require("./RsEmpty");
const RsSimple_1 = require("./RsSimple");
class RsWithStatus extends RsWrap_1.RsWrap {
    constructor(a, b) {
        if (typeof a === 'number') {
            return new RsWithStatus(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && typeof b === 'number') {
            super(new RsSimple_1.RsSimple(Object.assign({}, a.head(), { status: b }), a.body()));
        }
        else {
            throw new Error('Wrong arguments');
        }
    }
}
exports.RsWithStatus = RsWithStatus;
