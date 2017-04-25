import { Parsed } from './index';
import { Request } from '../index';
declare class PrJson implements Parsed {
    private req;
    constructor(req: Request);
    content(): any;
}
export { PrJson };
