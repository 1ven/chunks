import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { HttpError } from '../http';

class CkRegEx implements Chunk {
  constructor(private pathname: string, private chunk: Chunk) {}

  public act(req: Request): Promise<Response> | void {
    if (req.head().uri !== this.pathname) {
      throw new HttpError(404);
    }
    return this.chunk.act(req);
  }
}

export {
  CkRegEx,
}

