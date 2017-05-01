"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RawBody {
    constructor(data) {
        this.data = data;
    }
    print() {
        // TODO: If data is object, probably we should use JSON.stringify
        return String(this.data);
    }
}
exports.RawBody = RawBody;
