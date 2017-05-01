import { PlainData } from '../../types';
import { Body } from './index';

class XmlBody implements Body {
  constructor(private data: PlainData) {}

  print() {
    return '';
  }
}

export {
  XmlBody,
}
