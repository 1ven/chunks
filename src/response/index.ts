import * as _ from 'lodash';
import { PlainObject, PlainData, isPlainData } from '../types';

interface Response {
  head(): ResponseHead,
  body(): ResponseBody,
}

export type ResponseHead = {
  status: number,
  headers?: PlainObject,
}

export type ResponseBody = PlainData | null;

function isResponse(arg): arg is Response {
  return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}

function isResponseBody(arg): arg is ResponseBody {
  return isPlainData(arg) || _.isNull(arg);
}

export {
  Response,
  isResponse,
  isResponseBody,
}
