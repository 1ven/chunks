import { Response } from './index';

class RsWithBody implements Response {
  private origin: Response;
  private body: number;

  constructor(res: Response, body: string) {
    this.origin = res;
    this.body = body;
  }

  public head() {
    return this.origin.head();
  }

  public body() {
    return this.body;
  }
}

export {
  RsWithBody,
}
