import { Back } from './index';
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
      // TODO: Implement raw response getting from Response instance
      socket.end();
    });
  }
}

export {
  BkBasic,
}
