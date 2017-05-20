import { Request } from '../request';
import { Response } from '../response';

export type Chunk = (req: Request) => Promise<Response>;
export { fork } from './fork';
export { methods } from './methods';
export { path } from './path';

export const makeResponse = (res: Response): Promise<Response> => (
  Promise.resolve(res)
)