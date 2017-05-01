import { PlainObject } from '../types';

interface Request {
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

export {
  Request,
}

