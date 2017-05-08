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

export type ResponseBody = PlainData | EmptyResponseBody;

export type EmptyResponseBody = null;

function isResponse(arg): arg is Response {
  return !_.isPlainObject(arg) && !!arg.head && !!arg.body;
}

function isResponseBody(arg): arg is ResponseBody {
  return isPlainData(arg) || isEmptyResponseBody(arg);
}

function isEmptyResponseBody(arg): arg is EmptyResponseBody {
  return _.isNull(arg);
}

export {
  Response,
  isResponse,
  isResponseBody,
  isEmptyResponseBody,
}
