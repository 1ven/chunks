import { PlainData } from '../types';

export type Response = {
  status: number,
  body?: ResponseBody,
  headers?: {
    [key: string]: string,
  },
}
export type ResponseBody = PlainData;
export { body } from './body';
export { empty } from './empty';
export { headers } from './headers';
export { json } from './json';
export { status } from './status';