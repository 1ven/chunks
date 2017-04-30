import { PlainObject } from '../types';
interface Request {
    head(): RequestHead;
    body(): string;
}
export declare type RequestHead = {
    uri: string;
    method: string;
    headers?: PlainObject;
};
export { Request };
