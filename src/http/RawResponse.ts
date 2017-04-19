import * as http from 'http';
import * as _ from 'lodash';
import { Response } from '../response';

class RawResponse {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  public print() {
    const { status, headers } = this.res.head();
    const body = this.res.body();
    const rawHeaders = _.reduce(headers, (acc, value, key) => (
      acc + `${key}: ${value}\n`
    ), '');

    return (
      `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}\n` +
      rawHeaders + `\n\n` + body
    );
  }
}

export {
  RawResponse,
}
