"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var index_1 = require("./index");
var chunk_1 = require("../chunk");
var BkBasic_1 = require("./BkBasic");
var FtBasic = (function () {
    function FtBasic(a) {
        if (chunk_1.isChunk(a)) {
            return new FtBasic(new BkBasic_1.BkBasic(a));
        }
        else if (index_1.isBack(a)) {
            this.back = a;
        }
    }
    FtBasic.prototype.start = function (port, callback) {
        var _this = this;
        var server = net.createServer();
        server.on('connection', function (socket) {
            _this.back.accept(socket);
        });
        server.listen(port, callback);
    };
    return FtBasic;
}());
exports.FtBasic = FtBasic;
