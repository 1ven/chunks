import net = require('net');
import { make } from './response';
import { Chunk } from '../../chunk';
import { Request } from '../../request';
import { Response, status } from '../../response';
import { Listener } from './';

export function safe(listener: Listener) {
  return function(socket: net.Socket) {
    try {
      console.log('try')
      listener(socket);
    } catch(err) {
      console.log('catch')
      socket.end(make(status(500)));
    }
  }
}