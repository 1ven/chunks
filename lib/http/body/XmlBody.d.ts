import { PlainData } from '../../types';
import { Body } from './index';
declare class XmlBody implements Body {
    private data;
    constructor(data: PlainData);
    print(): string;
}
export { XmlBody };
