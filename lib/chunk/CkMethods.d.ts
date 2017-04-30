import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
declare class CkMethods implements Chunk {
    private methods;
    private chunk;
    constructor(methods: string, chunk: Chunk);
    act(req: Request): Promise<Response> | void;
}
export { CkMethods };
