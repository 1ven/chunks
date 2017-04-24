"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var HttpResponse = (function () {
    function HttpResponse(res) {
        this.res = res;
    }
    HttpResponse.prototype.send = function (socket) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            socket.end(new index_1.RawResponse(_this.res).print(), 'utf8');
            socket.on('end', function () {
                resolve();
            });
            socket.on('error', function (err) {
                reject(err);
            });
        });
    };
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
