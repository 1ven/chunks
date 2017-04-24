import { Response } from './index';
import { RsWrap } from './RsWrap';
declare class RsJson extends RsWrap {
    constructor(res: Response, json: Json);
    constructor(json: Json);
    constructor(res: Response);
}
export declare type Json = {
    [key: string]: string;
};
export { RsJson };
