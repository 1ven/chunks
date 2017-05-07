"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const http_1 = require("../http");
const Route_1 = require("../modules/Route");
const RqMatched_1 = require("../request/RqMatched");
class CkRoute {
    constructor(template, chunk) {
        this.template = template;
        this.chunk = chunk;
    }
    act(req) {
        try {
            const route = new Route_1.Route(this.template, this.path(req));
            const params = this.params(req, route.params());
            const rest = route.rest();
            return this.chunk.act(new RqMatched_1.RqMatched(req, params, rest));
        }
        catch (err) {
            if (/No match/.test(err.message)) {
                throw new http_1.HttpError(404);
            }
            else {
                throw err;
            }
        }
    }
    params(req, params) {
        return RqMatched_1.isRouteRequest(req) ? (_.merge({}, req.params(), params)) : (params);
    }
    path(req) {
        return RqMatched_1.isRouteRequest(req) ? (req.rest()) : (req.head().uri);
    }
}
exports.CkRoute = CkRoute;
