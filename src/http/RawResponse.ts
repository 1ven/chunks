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

    return (
      this.makeStatusLine(status) +
      this.makeHeaders(headers) +
      this.makeBody(body)
    );
  }

  private makeStatusLine(status: number) {
    return `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}`;
  }

  private makeHeaders(headers?) {
    if (_.isUndefined(headers)) {
      return '';
    }
    return _.reduce(headers, (acc, value, key) => (
      acc + `\n${key}: ${value}`
    ), '');
  }

  private makeBody(body: string) {
    if (body === '') {
      return '';
    }
    return `\n\n${body}`;
  }
}

export {
  RawResponse,
}
