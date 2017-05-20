import _ = require('lodash');
import R = require('ramda');
import http = require('http');
import { raw, xml, json } from './body';
import { Response, ResponseBody } from '../../../response';
import { PlainData } from '../../../types';

export const make = (res: Response): string => (
  makeStatusLine(res.status) +
  makeHeaders(res.headers) +
  makeBody(res.body, res.headers)
)

const makeStatusLine = (status: number): string => (
  `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}`
)

const makeHeaders = (headers?): string => (
  _.isUndefined(headers) ? (
    ''
  ) : (
    _.reduce(headers, (acc, value, key) => (
      acc + `\n${key}: ${value}`
    ), '')
  )
)

const makeBody = (data?: ResponseBody, headers?): string => {
  const contentType: any = R.path(['Content-Type'], headers);
  const make = { json, xml }[contentType];
  const format = (s: string) => `\n\n${s}`;

  if (!data) {
    return '';
  }

  if (make) {
    return format(
      make(data)
    );
  }

  return format(
    raw(data)
  );
}