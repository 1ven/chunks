import { Chunk } from '../chunk';
import { makeServer, Server } from './front';
import { makeListener, Listener, safe } from './back';

export function createServer(chunk: Chunk): Server {
  const listener: Listener = safe(makeListener(chunk));
  const server: Server = makeServer(listener);

  return server;
}