import * as _ from 'lodash';

import { PlainObject, isPlainObject } from './PlainObject';

export type PlainData = (
  number |
  string |
  PlainObject |
  any[]
  // TODO: In fact it's not any[], but (number | string | PlainObject | PlainData)[],
  // but it seems TS does not supports it
);

export function isPlainData(arg): arg is PlainData {
  return (
    _.isArray(arg) && _.every(arg, isPlainData) ||
    _.isNumber(arg) ||
    _.isString(arg) ||
    isPlainObject(arg)
  );
}
