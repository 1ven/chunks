import { Response, isResponse } from './index';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsSimple } from './RsSimple';

class RsWithStatus extends RsWrap {
  constructor(status: number);
  constructor(res: Response, status: number);
  constructor(a, b?) {
    if (typeof a === 'number') {
      return new RsWithStatus(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'number') {
      // TODO: use RsWithHead like RqWithHead?
      super(new RsSimple(
        {
          ...a.head(),
          status: b,
        },
        a.body(),
      ));
    } else {
      throw new Error('Wrong arguments');
    }
  }
}

export {
  RsWithStatus,
}
