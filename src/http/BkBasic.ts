import * as net from 'net';
import { Back, HttpResponse } from './index';
import { Chunk } from '../chunk';
import { RqLive } from '../request/RqLive';

class BkBasic implements Back {
  private chunk: Chunk;

  constructor(chunk: Chunk) {
    this.chunk = chunk;
  }

  public accept(socket: net.Socket) {
    return new Promise((resolve, reject) => {
      socket.setEncoding('utf8');
      socket.on('data', async (raw: string) => {
        try {
          const res = await this.chunk.act(new RqLive(raw));

          await new HttpResponse(res).send(socket);

          resolve();
        } catch(err) {
          reject(err);
        }
      });
    });
  }
}

export {
  BkBasic,
}
