import * as _ from 'lodash';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsSimple } from './RsSimple';
import {
  Response,
  ResponseBody,
  isResponse,
  isResponseBody,
} from './index';

class RsWithBody extends RsWrap {
  constructor(body: ResponseBody);
  constructor(res: Response, body: ResponseBody);
  constructor(a, b?) {
    if (isResponseBody(a)) {
      return new RsWithBody(new RsEmpty(), a);
    } else if (isResponse(a) && isResponseBody(b)) {
      super(new RsSimple(a.head(), b));
    } else {
      throw new Error('Wrong arguments');
    }
  }
}

export {
  RsWithBody,
}

