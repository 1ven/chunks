import * as http from 'http';
import * as _ from 'lodash';

class RawResponse {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  public print() {
    const { status, headers } = res.head();
    const body = res.body();
    const rawHeaders = _.reduce(headers, (acc, value, key) => (
      acc + `${key}: ${value}\n`
    ), '');

    return (
      `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}\n` +
      rawHeaders + `\n\n` + body;
    );
  }
}

export {
  RawResponse,
}
