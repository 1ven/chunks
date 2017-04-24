import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
declare class CkFork implements Chunk {
    private chunks;
    constructor(...chunks: Chunk[]);
    act(req: Request): Promise<Response>;
}
export { CkFork };
