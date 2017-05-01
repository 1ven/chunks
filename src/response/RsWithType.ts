import * as _ from 'lodash';
import { Response, isResponse } from './index';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsSimple } from './RsSimple';

class RsWithType extends RsWrap {
  constructor(type: string);
  constructor(res: Response, type: string);
  constructor(a, b?) {
    if (typeof a === 'string') {
      return new RsWithType(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'string') {
      // TODO: use RsWithHead like RqWithHead
      super(new RsSimple(
        _.merge({}, a.head(), {
          headers: {
            'Content-Type': b,
          },
        }),
        a.body(),
      ));
    } else {
      throw new Error('Wrong arguments');
    }
  }
}

export {
  RsWithType,
}
