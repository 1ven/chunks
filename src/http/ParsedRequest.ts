// TODO: Implement validations on HTTP 1.1 requests
import * as parser from 'http-string-parser';

class ParsedRequest {
  private raw: string;

  constructor(raw: string) {
    this.raw = raw;
  }

  public print() {
    return parser.parseRequest(this.raw);
  }
}

export {
  ParsedRequest,
}
