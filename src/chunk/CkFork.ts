import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { HttpError } from '../http';

class CkFork implements Chunk {
  private chunks: Chunk[];

  constructor(...chunks: Chunk[]) {
    this.chunks = chunks;
  }

  public act(req: Request): Promise<Response> {
    for (let chunk of this.chunks) {
      try {
        return chunk.act(req);
      } catch(err) {
        if (!(err instanceof HttpError) ||
          err.status !== 404) {
          throw err;
        }
      }
    }

    throw new HttpError(404);
  }
}

export {
  CkFork,
}

