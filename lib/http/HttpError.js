"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var HttpError = (function () {
    function HttpError(status) {
        this.message = http.STATUS_CODES[status];
        this.status = status;
    }
    return HttpError;
}());
exports.HttpError = HttpError;
