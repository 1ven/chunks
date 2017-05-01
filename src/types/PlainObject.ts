import * as _ from 'lodash';

export type PlainObject = {
  [key: string]: any,
};

export function isPlainObject(arg): arg is PlainObject {
  return _.isPlainObject(arg);
}
