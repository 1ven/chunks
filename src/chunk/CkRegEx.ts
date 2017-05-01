import { Chunk } from './index';
import { Request } from '../request';
import { Response } from '../response';
import { HttpError } from '../http';

class CkRegEx implements Chunk {
  constructor(private regex: RegExp, private chunk: Chunk) {}

  public act(req: Request): Promise<Response> | void {
    const { uri } = req.head();
    const str = uri[uri.length - 1] === '/' ? uri.slice(0, -1) : uri;

    if (!this.regex.test(str)) {
      throw new HttpError(404);
    }

    return this.chunk.act(req);
  }
}

export {
  CkRegEx,
}

