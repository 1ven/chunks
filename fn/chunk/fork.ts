import R = require('ramda');
import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk } from '../chunk';

export const fork = (...chunks: Array<Chunk>) => (
  (req: Request): Response => (
    R.reduce(
      (acc: Response, chunk: Chunk) => {
        const res = chunk(req);
        return res.status === 404 ? acc : res;
      },
      status(404),
      chunks
    )
  )
);