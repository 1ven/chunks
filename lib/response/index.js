"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const types_1 = require("../types");
function isResponse(arg) {
    return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}
exports.isResponse = isResponse;
function isResponseBody(arg) {
    return types_1.isPlainData(arg) || _.isNull(arg);
}
exports.isResponseBody = isResponseBody;
