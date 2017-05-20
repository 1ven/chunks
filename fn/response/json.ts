import R = require('ramda');
import { Response, body, headers } from './';

export const json = (data): Response => R.merge(
  body(data),
  headers({
    'Content-Type': 'json',
  }),
);