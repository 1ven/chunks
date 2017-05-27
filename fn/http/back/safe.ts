import net = require('net');
import R = require('ramda');
import { make } from './response';
import { Chunk } from '../../chunk';
import { Request } from '../../request';
import { Response, status, body } from '../../response';
import { Listener } from './';

export function safe(listener: Listener) {
  return async function(socket: net.Socket) {
    try {
      return await listener(socket);
    } catch(err) {
      const withStatus = status(500);
      const res = process.env.NODE_ENV === 'production' ? (
        withStatus
      ) : (
        R.merge(
          body(getMessage(err)),
          withStatus,
        )
      );
      socket.end(make(res));
    }
  }
}

const getMessage = (err: any): string => (
  !err ? (
    'Empty error'
  ) : (
    err.stack || err.message || JSON.stringify(err)
  )
)