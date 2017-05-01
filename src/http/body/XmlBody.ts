import { PlainData } from '../../types';
import { Body } from './index';

class XmlBody implements Body {
  private data: PlainData;

  constructor(data: PlainData) {
    this.data = data;
  }

  print() {
    return '';
  }
}

export {
  XmlBody,
}
