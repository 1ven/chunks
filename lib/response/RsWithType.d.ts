import { Response } from './index';
import { RsWrap } from './RsWrap';
declare class RsWithType extends RsWrap {
    constructor(type: string);
    constructor(res: Response, type: string);
}
export { RsWithType };
