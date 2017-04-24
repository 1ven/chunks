"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const RqLive_1 = require("../request/RqLive");
class BkBasic {
    constructor(chunk) {
        this.chunk = chunk;
    }
    accept(socket) {
        return new Promise((resolve, reject) => {
            socket.setEncoding('utf8');
            socket.on('data', (raw) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const res = yield this.chunk.act(new RqLive_1.RqLive(raw));
                    yield new index_1.HttpResponse(res).send(socket);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
exports.BkBasic = BkBasic;
