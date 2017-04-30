"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonBody {
    constructor(data) {
        this.data = data;
    }
    print() {
        return JSON.stringify(this.data);
    }
}
exports.JsonBody = JsonBody;
