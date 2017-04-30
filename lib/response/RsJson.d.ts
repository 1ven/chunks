import { RsWrap } from './RsWrap';
import { Response, ResponseBody } from './index';
declare class RsJson extends RsWrap {
    constructor(body: ResponseBody);
    constructor(res: Response, body: ResponseBody);
    constructor(res: Response);
}
export { RsJson };
