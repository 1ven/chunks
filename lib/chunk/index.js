"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isChunk(arg) {
    return !!arg.act;
}
exports.isChunk = isChunk;
var CkFork_1 = require("./CkFork");
exports.CkFork = CkFork_1.CkFork;
var CkRegEx_1 = require("./CkRegEx");
exports.CkRegEx = CkRegEx_1.CkRegEx;
var CkMethods_1 = require("./CkMethods");
exports.CkMethods = CkMethods_1.CkMethods;
