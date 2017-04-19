import * as net from 'net';
import { Front, BkBasic } from './index';
import { Chunk } from '../chunk';

class FtBasic implements Front {
  private chunk: Chunk;
  private port: number;

  constructor(chunk: Chunk, port: number) {
    this.chunk = chunk;
    this.port = port;
  }

  public start() {
    const server = net.createServer();

    server.on('connection', (socket: net.Socket) => {
      new BkBasic(this.chunk).accept(socket);
    });

    server.listen(this.port);
  }
}

export {
  FtBasic,
}
