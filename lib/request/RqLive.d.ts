import { Request, RequestHead } from './index';
declare class RqLive implements Request {
    private parsed;
    constructor(raw: string);
    head(): RequestHead;
    body(): any;
}
export { RqLive };
