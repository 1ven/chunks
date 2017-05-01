"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class RqWithHead {
    constructor(origin, part) {
        this.origin = origin;
        this.part = part;
    }
    head() {
        return _.merge({}, this.origin.head(), this.part);
    }
    body() {
        return this.origin.body();
    }
}
exports.RqWithHead = RqWithHead;
