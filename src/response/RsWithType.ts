import * as _ from 'lodash';
import { Response } from './index';

class RsWithType implements Response {
  private origin: Response;
  private type: string;

  constructor(res: Response, type: string) {
    this.origin = res;
    this.type = type;
  }

  public head() {
    return _.merge({}, this.origin.head(), {
      headers: {
        'Content-Type': this.type,
      },
    });
  }

  public body() {
    this.origin.body();
  }
}
