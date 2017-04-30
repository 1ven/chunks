import { PlainObject } from '../../types';
import { Body } from './index';

class JsonBody implements Body {
  private data: PlainObject;

  constructor(data: PlainObject) {
    this.data = data;
  }

  print() {
    return JSON.stringify(this.data);
  }
}

export {
  JsonBody,
}
