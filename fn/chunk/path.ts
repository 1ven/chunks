import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk } from '../chunk';

export const path = (path: string, chunk: Chunk) => (
  (req: Request): Response => (
    req.uri !== path ? (
      status(404)
    ) : (
      chunk(req)
    )
  )
);