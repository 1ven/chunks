import { PlainData } from '../../types';
import { Body } from './index';
declare class RawBody implements Body {
    private data;
    constructor(data: PlainData);
    print(): string;
}
export { RawBody };
