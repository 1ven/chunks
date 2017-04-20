import * as _ from 'lodash';
import {
  Response,
  RsWrap,
  RsEmpty,
  RsSimple,
  isResponse,
} from './index';

class RsWithType extends RsWrap {
  constructor(type: string);
  constructor(res: Response, type: string);
  constructor(a, b?) {
    if (typeof a === 'string') {
      new RsWithType(new RsEmpty(), a);
    } else if (isResponse(a) && typeof b === 'string') {
      super(new RsSimple(
        _.merge({}, a.head(), {
          headers: {
            'Content-Type': b,
          },
        }),
        a.body(),
      ));
    }
  }
}

export {
  RsWithType,
}
