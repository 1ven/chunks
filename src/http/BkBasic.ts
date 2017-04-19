import * as net from 'net';
import { Back, RawResponse } from './index';
import { Chunk } from '../chunk';
import { RqLive } from '../request';

class BkBasic implements Back {
  private chunk: Chunk;

  constructor(chunk: Chunk) {
    this.chunk = chunk;
  }

  public accept(socket: net.Socket) {
    let raw = '';

    socket.setEncoding('utf8');

    socket.on('data', (chunk: string) => {
      raw += chunk;
    });

    socket.on('end', () => {
      const res = this.chunk.act(new RqLive(raw));

      socket.end(new RawResponse(res).print(), 'utf8');
    });
  }
}

export {
  BkBasic,
}
