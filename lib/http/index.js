"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBack(arg) {
    return !!arg.accept;
}
exports.isBack = isBack;
var BkBasic_1 = require("./BkBasic");
exports.BkBasic = BkBasic_1.BkBasic;
var FtBasic_1 = require("./FtBasic");
exports.FtBasic = FtBasic_1.FtBasic;
var ParsedRequest_1 = require("./ParsedRequest");
exports.ParsedRequest = ParsedRequest_1.ParsedRequest;
var HttpResponse_1 = require("./HttpResponse");
exports.HttpResponse = HttpResponse_1.HttpResponse;
var HttpError_1 = require("./HttpError");
exports.HttpError = HttpError_1.HttpError;
var RawResponse_1 = require("./RawResponse");
exports.RawResponse = RawResponse_1.RawResponse;
