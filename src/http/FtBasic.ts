import * as net from 'net';
import { Front, Back, isBack } from './index';
import { Chunk, isChunk } from '../chunk';
import { BkBasic } from './BkBasic';

class FtBasic implements Front {
  private back: Back;

  constructor(chunk: Chunk);
  constructor(back: Back);
  constructor(a) {
    if (isChunk(a)) {
      return new FtBasic(new BkBasic(a));
    } else if (isBack(a)) {
      this.back = a;
    } else {
      throw new Error('Wrong arguments');
    }
  }

  public start(port: number, callback?: Function) {
    const server = net.createServer();

    server.on('connection', (socket: net.Socket) => {
      this.back.accept(socket);
    });

    server.listen(port, callback);
  }
}

export {
  FtBasic,
}
