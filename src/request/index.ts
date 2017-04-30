import { PlainObject } from '../types';

interface Request {
  head(): RequestHead,
  body(): string,
}

export type RequestHead = {
  uri: string,
  method: string,
  headers?: PlainObject,
}

export {
  Request,
}

