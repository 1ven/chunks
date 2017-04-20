import { Response } from './index';

class RsWrap implements Response {
  private origin: Response;

  constructor(origin: Response) {
    this.origin = origin;
  }

  public head() {
    return this.origin.head();
  }

  public body() {
    return this.origin.body();
  }
}

export {
  RsWrap,
}

