import { Request, isRequest } from './index';
import { RqWrap } from './RqWrap';
import { RouteParams } from '../modules/Route';

export class RqMatched extends RqWrap implements RouteRequest {
  private p: RouteParams;
  private r: string;

  constructor(origin: Request, params: RouteParams, rest: string) {
    super(origin);

    this.p = params;
    this.r = rest;
  }

  public params() {
    return this.p;
  }

  public rest() {
    return this.r;
  }
}

export interface RouteRequest extends Request {
  params(): RouteParams,
  rest(): string,
}

export function isRouteRequest(arg): arg is RouteRequest {
  return isRequest(arg as RouteRequest) && !!arg.rest && !!arg.params;
}