import { Response } from './index';
declare class RsEmpty implements Response {
    head(): {
        status: number;
    };
    body(): string;
}
export { RsEmpty };
