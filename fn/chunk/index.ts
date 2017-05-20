import { Request } from '../request';
import { Response } from '../response';

export type Chunk = (req: Request) => Response;
export { fork } from './fork';
export { methods } from './methods';
export { path } from './path';