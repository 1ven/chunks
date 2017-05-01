import { PlainData } from '../../types';
import { Body } from './index';

class JsonBody implements Body {
  private data: PlainData;

  constructor(data: PlainData) {
    this.data = data;
  }

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
