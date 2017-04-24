"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const index_1 = require("./index");
const RsWrap_1 = require("./RsWrap");
const RsEmpty_1 = require("./RsEmpty");
const RsWithBody_1 = require("./RsWithBody");
const RsWithStatus_1 = require("./RsWithStatus");
const RsWithType_1 = require("./RsWithType");
class RsJson extends RsWrap_1.RsWrap {
    constructor(a, b) {
        if (index_1.isResponse(a) && isJson(b)) {
            return new RsJson(new RsWithBody_1.RsWithBody(a, JSON.stringify(b)));
        }
        else if (isJson(a)) {
            return new RsJson(new RsEmpty_1.RsEmpty(), a);
        }
        else if (index_1.isResponse(a)) {
            super(new RsWithType_1.RsWithType(new RsWithStatus_1.RsWithStatus(a, 200), 'json'));
        }
    }
}
exports.RsJson = RsJson;
function isJson(arg) {
    return _.isPlainObject(arg);
}
