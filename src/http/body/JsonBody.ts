import { PlainData } from '../../types';
import { Body } from './index';

class JsonBody implements Body {
  constructor(private data: PlainData) {}

  print() {
    if (!isJson(this.data)) {
      throw new Error('Data is not JSON');
    }
    return JSON.stringify(this.data);
  }
}

function isJson(arg) {
  // TODO: Implement check
  return true;
}

export {
  JsonBody,
}
