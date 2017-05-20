import * as net from 'net';
import { Back, HttpResponse, HttpError } from './index';
import { RsWithStatus } from '../response/RsWithStatus';
import { RsWithBody } from '../response/RsWithBody';

class BkSafe implements Back {
  constructor(private origin: Back) {}

  public async accept(socket: net.Socket) {
    try {
      return await this.origin.accept(socket);
    } catch(err) {
      const status = err instanceof HttpError ? err.status : 500;
      // TODO: check if it's actual response body if no, assign "Unrecognized response body"
      // or cast err to string
      const body = err instanceof HttpError ? err.message : err.stack || err.message || err;
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

