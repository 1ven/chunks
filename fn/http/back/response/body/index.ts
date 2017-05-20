import { PlainData } from '../../../../types';

export type Body = (data: PlainData) => string;

export { json } from './json';
export { raw } from './raw';
export { xml } from './xml';

// TODO: should we parse request this way as well?