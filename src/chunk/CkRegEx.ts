import { Chunk } from './index';
import { Request } from '../request';
import { HttpError } from '../http';

class CkRegEx implements Chunk {
  private pathname: string;
  private chunk: Chunk;

  constructor(pathname: string, chunk: Chunk) {
    this.pathname = pathname;
    this.chunk = chunk;
  }

  public act(req: Request) {
    if (req.head().uri !== this.pathname) {
      throw new HttpError(404);
    }
    return this.chunk.act(req);
  }
}

export {
  CkRegEx,
}

