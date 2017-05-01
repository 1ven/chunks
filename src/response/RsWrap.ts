import { Response } from './index';

class RsWrap implements Response {
  constructor(private origin: Response) {}

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

