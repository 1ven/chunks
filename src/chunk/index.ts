import { Request } from '../request';
import { Response } from '../response';

interface Chunk {
  act(request: Request): Promise<Response>,
}

function isChunk(arg): arg is Chunk {
  return !!arg.act;
}

export { CkFork } from './CkFork';
export { CkRegEx } from './CkRegEx';
export { CkMethods } from './CkMethods';

export {
  Chunk,
  isChunk,
}
