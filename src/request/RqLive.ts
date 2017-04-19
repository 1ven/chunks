import * as _ from 'lodash';
import { ParsedRequest } from '../http/ParsedRequest';
import { Request } from './index';

class RqLive implements Request {
  private parsed: any;

  constructor(raw: string) {
    this.parsed = new ParsedRequest(raw).print();
  }

  public head() {
    return _.omit(this.parsed, ['body']);
  }

  public body() {
    return this.parsed.body;
  }
}

export {
  RqLive,
}
