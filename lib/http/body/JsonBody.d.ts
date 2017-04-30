import { PlainObject } from '../../types';
import { Body } from './index';
declare class JsonBody implements Body {
    private data;
    constructor(data: PlainObject);
    print(): string;
}
export { JsonBody };
