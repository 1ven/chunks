import { PlainData } from '../../types';
import { Body } from './index';

class RawBody implements Body {
  constructor(private data: PlainData) {}

  print() {
    // TODO: If data is object, probably we should use JSON.stringify
    return String(this.data);
  }
}

export {
  RawBody,
}
