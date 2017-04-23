import * as _ from 'lodash';
import { Response, isResponse } from './index';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsWithBody } from './RsWithBody';
import { RsWithStatus } from './RsWithStatus';
import { RsWithType } from './RsWithType';

class RsJson extends RsWrap {
  constructor(res: Response, json: JSON);
  constructor(json: JSON);
  constructor(res: Response);
  constructor(a, b?) {
    if (isResponse(a) && isJson(b)) {
      return new RsJson(
        new RsWithBody(a, JSON.stringify(b))
      );
    } else if (isJson(a)) {
      return new RsJson(new RsEmpty(), a);
    } else if (isResponse(a)) {
      super(new RsWithType(
        new RsWithStatus(a, 200),
        'json',
      ));
    }
  }
}

function isJson(arg): arg is JSON {
  return _.isPlainObject(arg) && _.every(arg, String);
}

export {
  RsJson,
}

