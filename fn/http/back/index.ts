import net = require('net');
import { parse } from './request';
import { make } from './response';
import { Chunk } from '../../chunk';
import { Request } from '../../request';
import { Response } from '../../response';

export function makeListener(chunk: Chunk): Listener {
  return function(socket: net.Socket) {
    socket.setEncoding('utf8');
    socket.on('data', (raw: string) => {
      const req: Request = parse(raw);
      const res: Response = chunk(req);

      socket.end(make(res), 'utf8');
    });
  }
}

export type Listener = (socket: net.Socket) => void;

export { safe } from './safe';