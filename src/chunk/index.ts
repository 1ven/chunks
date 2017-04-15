import { Request } from '../request';
import { Response } from '../response';

interface Chunk {
  act(request: Request): Response,
}

export {
  Chunk,
}
