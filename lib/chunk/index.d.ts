import { Request } from '../request';
import { Response } from '../response';
interface Chunk {
    act(request: Request): Promise<Response> | void;
}
declare function isChunk(arg: any): arg is Chunk;
export { CkFork } from './CkFork';
export { CkRegEx } from './CkRegEx';
export { CkMethods } from './CkMethods';
export { Chunk, isChunk };
