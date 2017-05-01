"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonBody {
    constructor(data) {
        this.data = data;
    }
    print() {
        if (!isJson(this.data)) {
            throw new Error('Data is not JSON');
        }
        return JSON.stringify(this.data);
    }
}
exports.JsonBody = JsonBody;
function isJson(arg) {
    // TODO: Implement check
    return true;
}
