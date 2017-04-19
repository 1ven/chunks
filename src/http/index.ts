import * as net from 'net';

interface Back {
  accept(socket: net.Socket): void,
}

interface Front {
  start(): void,
}

export { BkBasic } from './BkBasic';
export { FtBasic } from './FtBasic';
export { ParsedRequest } from './ParsedRequest';
export { RawResponse } from './RawResponse';

export {
  Back,
  Front,
}
