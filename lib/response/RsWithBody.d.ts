import { Response } from './index';
import { RsWrap } from './RsWrap';
declare class RsWithBody extends RsWrap {
    constructor(body: string);
    constructor(res: Response, body: string);
}
export { RsWithBody };
