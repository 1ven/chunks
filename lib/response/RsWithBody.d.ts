import { RsWrap } from './RsWrap';
import { Response, ResponseBody } from './index';
declare class RsWithBody extends RsWrap {
    constructor(body: ResponseBody);
    constructor(res: Response, body: ResponseBody);
}
export { RsWithBody };
