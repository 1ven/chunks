import * as net from 'net';
import { Back, HttpResponse, HttpError } from './index';
import { RsWithStatus } from '../response/RsWithStatus';
import { RsWithBody } from '../response/RsWithBody';

class BkSafe implements Back {
  private origin: Back;

  constructor(back: Back) {
    this.origin = back;
  }

  public async accept(socket: net.Socket) {
    try {
      return await this.origin.accept(socket);
    } catch(err) {
      const status = err instanceof HttpError ? err.readStatus() : 500;
      const body = err instanceof HttpError ? err.message : err.message + '\n' + err.stack;
      const withStatus = new RsWithStatus(status);
      const res = process.env.NODE_ENV === 'production' ? (
        withStatus
      ) : (
        new RsWithBody(withStatus, body)
      );
      return await new HttpResponse(res).send(socket);
    }
  }
}

export {
  BkSafe,
}

