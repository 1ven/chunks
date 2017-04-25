"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class HttpError {
    constructor(status, message) {
        this.message = message || http.STATUS_CODES[status];
        this.status = status;
    }
}
exports.HttpError = HttpError;
