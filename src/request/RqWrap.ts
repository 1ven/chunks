import { Request } from './index';

export class RqWrap implements Request {
  constructor(private origin: Request) {}

  public head() {
    return this.origin.head();
  }

  public body() {
    return this.origin.body();
  }
}