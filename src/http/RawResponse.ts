import * as http from 'http';
import * as _ from 'lodash';
import { isPlainObject } from '../types';
import { Response, ResponseBody } from '../response';
import { JsonBody, XmlBody } from './body';

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
      this.makeBody(body, headers['Content-Type'])
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

  private makeBody(body: ResponseBody, rt: string) {
    const types = {
      'json': JsonBody,
      'xml': XmlBody,
    };

    if (!isPlainObject(body) || _.keys(types).indexOf(rt) === -1) {
      return '';
    }

    return `\n\n${new types[rt](body).print()}`;
  }
}

export {
  RawResponse,
}
