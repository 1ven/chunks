import {
  Response,
  RsWrap,
  RsSimple,
  RsEmpty,
  isResponse,
} from './index';

class RsWithBody extends RsWrap {
  constructor(body: string);
  constructor(res: Response, body: string);
  constructor(a, b?) {
    if (typeof a === 'string') {
      new RsWithBody(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'string') {
      super(new RsSimple(a.head(), b));
    }
  }
}

export {
  RsWithBody,
}

