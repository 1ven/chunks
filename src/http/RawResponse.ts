import * as http from 'http';
import * as _ from 'lodash';
import { Response, ResponseBody, isEmptyResponseBody } from '../response';
import { JsonBody, XmlBody, RawBody } from './body';

class RawResponse {
  constructor(private res: Response) {}

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

  private makeBody(body: ResponseBody) {
    const format = (s: string) => `\n\n${s}`;
    const { headers } = this.res.head();
    const ct = headers && headers['Content-Type'];
    const types = {
      'json': JsonBody,
      'xml': XmlBody,
    };

    if (isEmptyResponseBody(body)) {
      return '';
    }

    if (ct && _.keys(types).indexOf(ct) !== -1) {
      return format(
        new types[ct](body).print()
      );
    }

    return format(new RawBody(body).print());
  }
}

export {
  RawResponse,
}
