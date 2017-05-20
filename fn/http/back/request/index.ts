import parser = require('http-string-parser');
import { Request } from '../../../request';

export const parse = (raw: string): Request => {
  return parser.parseRequest(raw);
}