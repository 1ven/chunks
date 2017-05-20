import R = require('ramda');
import { Request } from '../request';
import { Response, status } from '../response';
import { Chunk, makeResponse } from '.';

export const fork = (...chunks: Array<Chunk>) => (
  (req: Request): Promise<Response> => (
    R.reduce(
      async (acc: Promise<Response>, chunk: Chunk) => {
        const res = await chunk(req);

        return res.status === 404 ? acc : res
      },
      makeResponse(
        status(404),
      ),
      chunks
    )
  )
);