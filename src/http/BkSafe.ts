import * as net from 'net';
import { Back, HttpResponse, HttpError } from './index';
import { RsWithStatus } from '../response/RsWithStatus';

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
      return await new HttpResponse(new RsWithStatus(status)).send(socket);
    }
  }
}

export {
  BkSafe,
}

