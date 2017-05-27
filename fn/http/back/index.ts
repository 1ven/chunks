import net = require('net');
import { parse } from './request';
import { make } from './response';
import { Chunk } from '../../chunk';
import { Request } from '../../request';
import { Response } from '../../response';

export function makeListener(chunk: Chunk): Listener {
  return function(socket: net.Socket) {
    return new Promise((resolve, reject) => {
      socket.setEncoding('utf8');
      socket.on('data', async (raw: string) => {
        try {
          const req: Request = parse(raw);
          const res: Response = await chunk(req);

          socket.end(make(res), 'utf8');

          resolve();
        } catch(err) {
          reject(err);
        }
      });
    });
  }
}

export type Listener = (socket: net.Socket) => Promise<any>;

export { safe } from './safe';