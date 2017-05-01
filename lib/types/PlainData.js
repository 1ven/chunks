"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const PlainObject_1 = require("./PlainObject");
function isPlainData(arg) {
    return (_.isArray(arg) && _.every(arg, isPlainData) ||
        _.isNumber(arg) ||
        _.isString(arg) ||
        PlainObject_1.isPlainObject(arg));
}
exports.isPlainData = isPlainData;
