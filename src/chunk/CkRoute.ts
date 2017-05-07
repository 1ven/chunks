import * as _ from 'lodash';
import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { HttpError } from '../http';
import { Route, RouteParams } from '../modules/Route';
import { RqMatched, RouteRequest, isRouteRequest } from '../request/RqMatched';

export class CkRoute implements Chunk {
  constructor(private template: string, private chunk: Chunk) {}

  public act(req: Request | RouteRequest): Promise<Response> | void {
    try {
      const route = new Route(this.template, this.path(req));
      const params = this.params(req, route.params());
      const rest = route.rest();

      return this.chunk.act(new RqMatched(req, params, rest));
    } catch(err) {
      if (/No match/.test(err.message)) {
        throw new HttpError(404);
      } else {
        throw err;
      }
    }
  }

  private params(req: Request | RouteRequest, params: RouteParams) {
    return isRouteRequest(req) ? (
      _.merge({}, req.params(), params)
    ) : (
      params
    );
  }

  private path(req: Request | RouteRequest) {
    return isRouteRequest(req) ? (
      req.rest()
    ) : (
      req.head().uri
    );
  }
}

export interface RouteChunk {
  act(req: RouteRequest): Promise<Response> | void,
}