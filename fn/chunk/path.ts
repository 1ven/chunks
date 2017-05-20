import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk, makeResponse } from './';

export const path = (path: string, chunk: Chunk) => (
  (req: Request): Promise<Response> => (
    req.uri !== path ? (
      makeResponse(
        status(404)
      )
    ) : (
      chunk(req)
    )
  )
);