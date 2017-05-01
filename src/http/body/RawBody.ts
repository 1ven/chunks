import { PlainData } from '../../types';
import { Body } from './index';

class RawBody implements Body {
  private data: PlainData;

  constructor(data: PlainData) {
    this.data = data;
  }

  print() {
    // TODO: If data is object, probably we should use JSON.stringify
    return String(this.data);
  }
}

export {
  RawBody,
}
