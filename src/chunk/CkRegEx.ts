import * as _ from 'lodash';
import { Chunk } from './index';
// TODO: should we export RqWithHead etc from it(and from other dirs as well)?
import { Request } from '../request';
import { RqWithHead } from '../request/RqWithHead';
import { Response } from '../response';
import { HttpError } from '../http';

class CkRegEx implements Chunk {
  constructor(private regex: RegExp, private chunk: Chunk) {}

  public act(req: Request): Promise<Response> | void {
    const head = req.head();
    const { uri } = head;
    const str = uri[uri.length - 1] === '/' ? uri.slice(0, -1) : uri;

    if (!this.regex.test(str)) {
      throw new HttpError(404);
    }

    return this.chunk.act(new RqWithHead(req, {
      uri: uri.replace(this.regex, ''),
    }));
  }
}

export {
  CkRegEx,
}

