import { Request } from '../request';
import { Response } from '../response';

interface Chunk {
  act(request: Request): Promise<Response> | void,
}

function isChunk(arg): arg is Chunk {
  return !!arg.act;
}

export { CkFork } from './CkFork';
export { CkRoute } from './CkRoute';
export { CkMethods } from './CkMethods';

export {
  Chunk,
  isChunk,
}
