"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const index_1 = require("./index");
const chunk_1 = require("../chunk");
const BkBasic_1 = require("./BkBasic");
class FtBasic {
    constructor(a) {
        if (chunk_1.isChunk(a)) {
            return new FtBasic(new BkBasic_1.BkBasic(a));
        }
        else if (index_1.isBack(a)) {
            this.back = a;
        }
    }
    start(port, callback) {
        const server = net.createServer();
        server.on('connection', (socket) => {
            this.back.accept(socket);
        });
        server.listen(port, callback);
    }
}
exports.FtBasic = FtBasic;
