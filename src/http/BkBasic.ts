import * as net from 'net';
import { Back, RawResponse } from './index';
import { Chunk } from '../chunk';
import { RqLive } from '../request/RqLive';

class BkBasic implements Back {
  private chunk: Chunk;

  constructor(chunk: Chunk) {
    this.chunk = chunk;
  }

  public accept(socket: net.Socket) {
    socket.setEncoding('utf8');

    socket.on('data', (raw: string) => {
      const res = this.chunk.act(new RqLive(raw));

      socket.end(new RawResponse(res).print(), 'utf8');
    });
  }
}

export {
  BkBasic,
}
