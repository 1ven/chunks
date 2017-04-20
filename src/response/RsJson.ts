import * as _ from 'lodash';
import {
  Response,
  RsWithBody,
  RsWithStatus,
  RsWithType,
  RsWrap,
  isResponse,
} from './index';

class RsJson extends RsWrap {
  constructor(json: Json);
  constructor(res: Response);
  constructor(a) {
    if (isJson(a)) {
      return new RsJson(new RsWithBody(a));
    }

    if (isResponse(a)) {
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

