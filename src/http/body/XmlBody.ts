import { PlainObject } from '../../types';
import { Body } from './index';

class XmlBody implements Body {
  private data: PlainObject;

  constructor(data: PlainObject) {
    this.data = data;
  }

  print() {
    return '';
  }
}

export {
  XmlBody,
}
