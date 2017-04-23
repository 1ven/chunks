"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isResponse(arg) {
    return !!arg.head && !!arg.body;
}
exports.isResponse = isResponse;
