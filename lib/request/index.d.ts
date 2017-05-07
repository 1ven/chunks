import { PlainObject } from '../types';
export interface Request {
    head(): RequestHead;
    body(): RequestBody;
}
export declare type RequestHead = {
    uri: string;
    method: string;
    headers?: PlainObject;
};
export declare type RequestBody = string;
export declare function isRequest(arg: any): arg is Request;
