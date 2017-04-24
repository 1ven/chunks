"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function isResponse(arg) {
    return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}
exports.isResponse = isResponse;
