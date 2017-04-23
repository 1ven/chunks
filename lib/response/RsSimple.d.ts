import { Response, ResponseHead } from './index';
declare class RsSimple implements Response {
    private h;
    private b;
    constructor(head: ResponseHead, body: string);
    head(): ResponseHead;
    body(): string;
}
export { RsSimple };
