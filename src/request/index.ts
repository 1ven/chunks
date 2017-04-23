interface Request {
  head(): RequestHead,
  body(): string,
}

export type RequestHead = {
  uri: string,
  method: string,
  headers?: JSON,
}

export {
  Request,
}

