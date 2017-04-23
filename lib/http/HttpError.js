"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class HttpError {
    constructor(status) {
        this.message = http.STATUS_CODES[status];
        this.status = status;
    }
    readStatus() {
        return this.status;
    }
}
exports.HttpError = HttpError;
