import { Response } from './index';

class RsEmpty implements Response {
  public head() {
    return {
      status: 200,
    };
  }

  public body() {
    return '';
  }
}
