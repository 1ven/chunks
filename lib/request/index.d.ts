import { PlainObject } from '../types';
interface Request {
    head(): RequestHead;
    body(): RequestBody;
}
export declare type RequestHead = {
    uri: string;
    method: string;
    headers?: PlainObject;
};
export declare type RequestBody = string;
export { Request };
