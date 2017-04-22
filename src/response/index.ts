import * as _ from 'lodash';

interface Response {
  head(): ResponseHead,
  body(): string,
}

type ResponseHead = {
  status: number,
  headers?: {
    [key: string]: string,
  },
}

function isResponse(arg): arg is Response {
  return !!arg.head && !!arg.body;
}

export {
  Response,
  ResponseHead,
  isResponse,
}
