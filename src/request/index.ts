interface Request {
  head(): RequestHead,
  body(): string,
}

type RequestHead = {
  uri: string,
  method: string,
  headers?: {
    [key: string]: string,
  },
}

export { RqLive } from './RqLive';

export {
  Request,
  RequestHead,
}

