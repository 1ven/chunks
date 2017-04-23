import { Chunk } from './index';
import { Request } from '../request';
import { HttpError } from '../http';

class CkFork implements Chunk {
  private chunks: Chunk[];

  constructor(...chunks: Chunk[]) {
    this.chunks = chunks;
  }

  public act(req: Request) {
    for (let chunk of this.chunks) {
      try {
        return chunk.act(req);
      } catch(err) {
        if (!(err instanceof HttpError) ||
          err.readStatus() !== 404) {
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

