import R = require('ramda');
import { Response, empty } from './';

// TODO: investigate, should we return full Response(always with `status`) from this kind of functions.
// As we may override `status` of initial response by merging ex `withHeaders`.
export const headers = (headers): Response => R.merge(
  empty(),
  {
    headers,
  },
);