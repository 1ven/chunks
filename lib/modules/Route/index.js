"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const UrlPattern = require("url-pattern");
const SlashedString_1 = require("../SlashedString");
// TODO: write tests
class Route {
    constructor(template, path) {
        this.template = template;
        this.path = path;
        this.restKey = '_';
    }
    params() {
        return _.omit(this.match(), [this.restKey]);
    }
    rest() {
        return this.match()[this.restKey];
    }
    parser() {
        return new UrlPattern(new SlashedString_1.SlashedString(this.template).read());
    }
    match() {
        const result = this.parser().match(this.path);
        if (!Boolean(result)) {
            throw new Error('No match');
        }
        return result;
    }
}
exports.Route = Route;
