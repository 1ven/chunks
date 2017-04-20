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
  return _.isEqual(
    Object.keys(Object.getPrototypeOf(test)),
    ['head', 'body'],
  );
}

export { RsEmpty } from './RsEmpty';
export { RsJson } from './RsJson';
export { RsSimple } from './RsSimple';
export { RsWithBody } from './RsWithBody';
export { RsWithStatus } from './RsWithStatus';
export { RsWithType } from './RsWithType';
export { RsWrap } from './RsWrap';

export {
  Response,
  ResponseHead,
  isResponse,
}
