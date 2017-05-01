import * as net from 'net';
import { Response } from '../response';
import { RawResponse } from './index';

class HttpResponse {
  constructor(private res: Response) {}

  public send(socket: net.Socket) {
    return new Promise((resolve, reject) => {
      socket.end(new RawResponse(this.res).print(), 'utf8');

      socket.on('end', () => {
        resolve();
      });

      socket.on('error', (err) => {
        reject(err);
      });
    });
  }

}

export {
  HttpResponse,
}
