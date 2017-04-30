import { Response, ResponseHead, ResponseBody } from './index';

class RsSimple implements Response {
  private h: ResponseHead;
  private b: ResponseBody;

  constructor(head: ResponseHead, body: ResponseBody) {
    this.h = head;
    this.b = body;
  }

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
