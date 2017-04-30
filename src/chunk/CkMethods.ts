import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { HttpError } from '../http';

class CkMethods implements Chunk {
  private methods: string;
  private chunk: Chunk;

  constructor(methods: string, chunk: Chunk) {
    this.methods = methods;
    this.chunk = chunk;
  }

  public act(req: Request): Promise<Response> | void {
    const methods = this.methods.replace(/\s/g, '').split(',');

    if (methods.indexOf(req.head().method) === -1) {
      throw new HttpError(404);
    }

    return this.chunk.act(req);
  }
}

export {
  CkMethods,
}

