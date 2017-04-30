import { Response, ResponseHead, ResponseBody } from './index';
declare class RsSimple implements Response {
    private h;
    private b;
    constructor(head: ResponseHead, body: ResponseBody);
    head(): ResponseHead;
    body(): {
        [key: string]: any;
    };
}
export { RsSimple };
