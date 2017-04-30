import { PlainObject } from '../../types';
import { Body } from './index';
declare class XmlBody implements Body {
    private data;
    constructor(data: PlainObject);
    print(): string;
}
export { XmlBody };
