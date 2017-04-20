import {
  Response,
  RsWrap,
  RsSimple,
  RsEmpty,
  isResponse,
} from './index';

class RsWithStatus extends RsWrap {
  constructor(status: number);
  constructor(res: Response, status: number);
  constructor(a, b?) {
    if (typeof a === 'number') {
      new RsWithStatus(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'number') {
      super(new RsSimple(
        {
          ...a.head(),
          status: b,
        },
        a.body(),
      ));
    }
  }
}

export {
  RsWithStatus,
}
