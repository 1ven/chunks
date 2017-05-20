import R = require('ramda');
import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk } from '../chunk';

export const methods = (methods: string, chunk: Chunk) => (
  (req: Request): Response => (
    !R.contains(
      req.method,
      methods.replace(/\s/g, '').split(',')
    ) ? ( 
      status(404)
    ) : (
      chunk(req)
    )
  )
);