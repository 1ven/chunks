import * as _ from 'lodash';

interface Response {
  head(): ResponseHead,
  body(): string,
}

export type ResponseHead = {
  status: number,
  headers?: JSON,
}

function isResponse(arg): arg is Response {
  return !!arg.head && !!arg.body;
}

export {
  Response,
  isResponse,
}
