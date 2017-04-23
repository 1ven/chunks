"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const index_1 = require("./index");
const RsWrap_1 = require("./RsWrap");
const RsEmpty_1 = require("./RsEmpty");
const RsSimple_1 = require("./RsSimple");
class RsWithType extends RsWrap_1.RsWrap {
    constructor(a, b) {
        if (typeof a === 'string') {
            return new RsWithType(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a) && typeof b === 'string') {
            // Use RsWithHeaders
            super(new RsSimple_1.RsSimple(_.merge({}, a.head(), {
                headers: {
                    'Content-Type': b,
                },
            }), a.body()));
        }
    }
}
exports.RsWithType = RsWithType;
