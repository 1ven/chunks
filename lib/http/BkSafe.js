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
const RsWithStatus_1 = require("../response/RsWithStatus");
const RsWithBody_1 = require("../response/RsWithBody");
class BkSafe {
    constructor(back) {
        this.origin = back;
    }
    accept(socket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.origin.accept(socket);
            }
            catch (err) {
                const status = err instanceof index_1.HttpError ? err.readStatus() : 500;
                const withStatus = new RsWithStatus_1.RsWithStatus(status);
                const res = process.env.NODE_ENV === 'production' ? (withStatus) : (new RsWithBody_1.RsWithBody(withStatus, err.message));
                return yield new index_1.HttpResponse(res).send(socket);
            }
        });
    }
}
exports.BkSafe = BkSafe;