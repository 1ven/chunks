import R = require('ramda');
import { Request } from '../../request';
import { Response, status } from '../../response';
import { Chunk, makeResponse } from '../';

export const fork = (...chunks: Array<Chunk>) => (
  (req: Request): Promise<Response> => (
    R.reduce(
      async (acc: Promise<Response>, chunk: Chunk) => {
        const current = await chunk(req);
        const prev = await acc;

        return current.status === 404 || prev.status !== 404 ? acc : current;
      },
      makeResponse(
        status(404),
      ),
      chunks
    )
  )
);