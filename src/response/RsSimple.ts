import { Response, ResponseHead } from './index';

class RsSimple implements Response {
  private h: ResponseHead;
  private b: string;

  constructor(head: ResponseHead, body: string) {
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
