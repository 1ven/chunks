import { Request } from './index';
import { PlainObject } from '../types';
declare class RqWithHead implements Request {
    private origin;
    private part;
    constructor(origin: Request, part: PlainObject);
    head(): {} & {
        uri: string;
        method: string;
        headers?: PlainObject;
    } & PlainObject;
    body(): string;
}
export { RqWithHead };
