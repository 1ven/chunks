import * as net from 'net';
import { Response } from '../response';
import { RawResponse } from './index';

class HttpResponse {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

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
