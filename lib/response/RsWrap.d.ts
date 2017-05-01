import { Response } from './index';
declare class RsWrap implements Response {
    private origin;
    constructor(origin: Response);
    head(): {
        status: number;
        headers?: {
            [key: string]: any;
        };
    };
    body(): string | number | any[] | {
        [key: string]: any;
    };
}
export { RsWrap };
