import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { RouteRequest } from '../request/RqMatched';
export declare class CkRoute implements Chunk {
    private template;
    private chunk;
    constructor(template: string, chunk: Chunk);
    act(req: Request | RouteRequest): Promise<Response> | void;
    private params(req, params);
    private path(req);
}
export interface RouteChunk {
    act(req: RouteRequest): Promise<Response> | void;
}
