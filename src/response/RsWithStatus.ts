import { Response } from './index';

class RsWithStatus implements Response {
  private origin: Response;
  private status: number;

  constructor(res: Response, status: number) {
    this.origin = res;
    this.status = status;
  }

  public head() {
    return {
      ...this.origin.head(),
      status: this.status,
    };
  }

  public body() {
    return this.origin.body();
  }
}

export {
  RsWithStatus,
}
