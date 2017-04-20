import { Response } from './index';

class RsWrap implements Response {
  private origin: Response;

  constructor(res: Response) {
    this.origin = res;
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

