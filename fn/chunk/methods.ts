import R = require('ramda');
import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk, makeResponse } from './';

export const methods = (methods: string, chunk: Chunk) => (
  (req: Request): Promise<Response> => (
    !R.contains(
      req.method,
      methods.replace(/\s/g, '').split(',')
    ) ? ( 
      makeResponse(
        status(404)
      )
    ) : (
      chunk(req)
    )
  )
);