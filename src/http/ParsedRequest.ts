// TODO: Implement validations on HTTP 1.1 requests
import * as parser from 'http-string-parser';

class ParsedRequest {
  constructor(private raw: string) {}

  public print() {
    return parser.parseRequest(this.raw);
  }
}

export {
  ParsedRequest,
}
