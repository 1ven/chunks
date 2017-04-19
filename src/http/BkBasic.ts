import { Back } from './index';
import { Chunk } from './chunk';

class BkBasic implements Back {
  private chunk: Chunk;

  constructor(chunk: Chunk) {
    this.chunk = chunk;
  }

  public accept(socket: net.Socket) {
    let result = '';

    socket.setEncoding('utf8');

    socket.on('data', (chunk: string) => {
      result += chunk;
    });

    socket.on('end', () => {
      // TODO: Validate HTML 1.1 request
      // TODO: Implement Request creating, relying on `result` raw request data
      // TODO: Implement Response creating, by providing request to this.chunk.act() method
      // TODO: Implement raw response getting from Response instance
      socket.end();
    });
  }
}

export {
  BkBasic,
}
