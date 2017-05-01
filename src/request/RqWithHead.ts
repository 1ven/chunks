import * as _ from 'lodash';
import { Request } from './index';
import { PlainObject } from '../types';

class RqWithHead implements Request {
  constructor(private origin: Request, private part: PlainObject) { }

  public head() {
    return _.merge({}, this.origin.head(), this.part);
  }

  public body() {
    return this.origin.body();
  }
}

export {
  RqWithHead,
}

