import { Response } from './index';
import { RsWrap } from './RsWrap';
declare class RsWithStatus extends RsWrap {
    constructor(status: number);
    constructor(res: Response, status: number);
}
export { RsWithStatus };
