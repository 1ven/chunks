import { PlainObject, PlainData } from '../types';
interface Response {
    head(): ResponseHead;
    body(): ResponseBody;
}
export declare type ResponseHead = {
    status: number;
    headers?: PlainObject;
};
export declare type ResponseBody = PlainData | EmptyResponseBody;
export declare type EmptyResponseBody = null;
declare function isResponse(arg: any): arg is Response;
declare function isResponseBody(arg: any): arg is ResponseBody;
declare function isEmptyResponseBody(arg: any): arg is EmptyResponseBody;
export { Response, isResponse, isResponseBody, isEmptyResponseBody };
