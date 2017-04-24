import * as _ from 'lodash';
import { Response, isResponse } from './index';
import { RsWrap } from './RsWrap';
import { RsEmpty } from './RsEmpty';
import { RsWithBody } from './RsWithBody';
import { RsWithStatus } from './RsWithStatus';
import { RsWithType } from './RsWithType';

class RsJson extends RsWrap {
  constructor(res: Response, json: Json);
  constructor(json: Json);
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
    } else {
      throw new Error('Wrong arguments');
    }
  }
}

function isJson(arg): arg is Json {
  return _.isPlainObject(arg);
}

export type Json = {
  [key: string]: string,
}

export {
  RsJson,
}

