interface Response {
  head(): ResponseHead,
  body(): string,
}

type ResponseHead {
  status: number,
  headers: {
    [key: string]: string,
  },
}

export {
  Response,
}
