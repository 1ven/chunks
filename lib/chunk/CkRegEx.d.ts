import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
declare class CkRegEx implements Chunk {
    private pathname;
    private chunk;
    constructor(pathname: string, chunk: Chunk);
    act(req: Request): Response;
}
export { CkRegEx };
