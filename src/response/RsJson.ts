import * as _ from 'lodash';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsWithBody } from './RsWithBody';
import { RsWithStatus } from './RsWithStatus';
import { RsWithType } from './RsWithType';
import {
  Response,
  ResponseBody,
  isResponse,
  isResponseBody,
} from './index';

class RsJson extends RsWrap {
  constructor(body: ResponseBody);
  constructor(res: Response, body: ResponseBody);
  constructor(res: Response);
  constructor(a, b?) {
    if (isResponseBody(a)) {
      return new RsJson(new RsEmpty(), a);
    } else if (isResponse(a) && isResponseBody(b)) {
      return new RsJson(
        new RsWithBody(a, b)
      );
    } else if (isResponse(a)) {
      super(new RsWithType(
        new RsWithStatus(a, 200),
        'json',
      ));
    } else {
      throw new Error('Wrong arguments');
    }
  }
}

export {
  RsJson,
}
