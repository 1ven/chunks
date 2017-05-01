import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
declare class CkRegEx implements Chunk {
    private regex;
    private chunk;
    constructor(regex: RegExp, chunk: Chunk);
    act(req: Request): Promise<Response> | void;
}
export { CkRegEx };
