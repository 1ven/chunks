import * as _ from 'lodash';
import {
  Response,
  RsEmpty,
  RsWithBody,
  RsWithStatus,
  RsWithType,
  RsWrap,
  isResponse,
} from './index';

class RsJson extends RsWrap {
  constructor(res: Response, json: Json);
  constructor(json: Json);
  constructor(res: Response);
  constructor(a, b?) {
    if (isResponse(a) && isJson(b)) {
      new RsJson(
        new RsWithBody(a, JSON.stringify(b))
      );
    } else if (isJson(a)) {
      new RsJson(new RsEmpty(), a);
    } else if (isResponse(a)) {
      super(new RsWithType(
        new RsWithStatus(a, 200),
        'json',
      ));
    }
  }
}

function isJson(arg): arg is Json {
  return _.isPlainObject(arg) && _.every(arg, String);
}

type Json = {
  [key: string]: string,
}

export {
  RsJson,
}

