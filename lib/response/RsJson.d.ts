import { Response } from './index';
import { RsWrap } from './RsWrap';
declare class RsJson extends RsWrap {
    constructor(res: Response, json: JSON);
    constructor(json: JSON);
    constructor(res: Response);
}
export { RsJson };
