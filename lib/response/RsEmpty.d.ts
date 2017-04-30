import { Response } from './index';
declare class RsEmpty implements Response {
    head(): {
        status: number;
    };
    body(): any;
}
export { RsEmpty };
