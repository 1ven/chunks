"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function isRequest(arg) {
    return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}
exports.isRequest = isRequest;
