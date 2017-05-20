import net = require('net');
import { Chunk } from '../../chunk';
import { Listener } from '../back';

export function makeServer(listener: Listener): Server {
  return function(port: number, callback?: Function) {
    const server = net.createServer();

    server.on('connection', listener);
    server.listen(port, callback);
  }
}

export type Server = (port: number, callback?: Function) => void;