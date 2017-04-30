import { PlainObject } from '../types';
interface Response {
    head(): ResponseHead;
    body(): ResponseBody;
}
export declare type ResponseHead = {
    status: number;
    headers?: PlainObject;
};
export declare type ResponseBody = PlainObject | null;
declare function isResponse(arg: any): arg is Response;
declare function isResponseBody(arg: any): arg is ResponseBody;
export { Response, isResponse, isResponseBody };
