import R = require('ramda');
import { Response, empty } from './';

export const body = (body): Response => R.merge(
  empty(),
  {
    body,
  },
);