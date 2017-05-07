import { Request } from '../request';
import { Response } from '../response';
interface Chunk {
    act(request: Request): Promise<Response> | void;
}
declare function isChunk(arg: any): arg is Chunk;
export { CkFork } from './CkFork';
export { CkRoute } from './CkRoute';
export { CkMethods } from './CkMethods';
export { Chunk, isChunk };
