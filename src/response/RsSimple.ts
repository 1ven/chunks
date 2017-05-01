import { Response, ResponseHead, ResponseBody } from './index';

class RsSimple implements Response {
  constructor(private h: ResponseHead, private b: ResponseBody) {}

  public head() {
    return this.h;
  }

  public body() {
    return this.b;
  }
}

export {
  RsSimple,
}
