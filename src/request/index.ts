import * as _ from 'lodash';
import { PlainObject } from '../types';

export interface Request {
  head(): RequestHead,
  body(): RequestBody,
}

export type RequestHead = {
  // TODO: rename `uri` to `path`
  uri: string,
  method: string,
  headers?: PlainObject,
}

export type RequestBody = string;

export function isRequest(arg): arg is Request {
  return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}

