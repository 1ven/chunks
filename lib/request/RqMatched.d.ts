import { Request } from './index';
import { RqWrap } from './RqWrap';
import { RouteParams } from '../modules/Route';
export declare class RqMatched extends RqWrap implements RouteRequest {
    private p;
    private r;
    constructor(origin: Request, params: RouteParams, rest: string);
    params(): RouteParams;
    rest(): string;
}
export interface RouteRequest extends Request {
    params(): RouteParams;
    rest(): string;
}
export declare function isRouteRequest(arg: any): arg is RouteRequest;
