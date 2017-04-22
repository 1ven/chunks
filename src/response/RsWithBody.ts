import { Response, isResponse } from './index';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsSimple } from './RsSimple';

class RsWithBody extends RsWrap {
  constructor(body: string);
  constructor(res: Response, body: string);
  constructor(a, b?) {
    if (typeof a === 'string') {
      return new RsWithBody(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'string') {
      super(new RsSimple(a.head(), b));
    }
  }
}

export {
  RsWithBody,
}

