"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlashedString {
    constructor(value) {
        this.value = value;
    }
    read() {
        const result = this.value.replace(/^\/?(.*?)\/?$/, '/$1/');
        return result === '//' ? '/' : result;
    }
}
exports.SlashedString = SlashedString;
