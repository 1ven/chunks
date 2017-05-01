import { Response, ResponseHead, ResponseBody } from './index';
declare class RsSimple implements Response {
    private h;
    private b;
    constructor(h: ResponseHead, b: ResponseBody);
    head(): ResponseHead;
    body(): string | number | any[] | {
        [key: string]: any;
    };
}
export { RsSimple };
