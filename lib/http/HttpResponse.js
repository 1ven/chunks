"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class HttpResponse {
    constructor(res) {
        this.res = res;
    }
    send(socket) {
        return new Promise((resolve, reject) => {
            socket.end(new index_1.RawResponse(this.res).print(), 'utf8');
            socket.on('end', () => {
                resolve();
            });
            socket.on('error', (err) => {
                reject(err);
            });
        });
    }
}
exports.HttpResponse = HttpResponse;
