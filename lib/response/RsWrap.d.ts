import { Response } from './index';
declare class RsWrap implements Response {
    private origin;
    constructor(res: Response);
    head(): {
        status: number;
        headers?: JSON;
    };
    body(): string;
}
export { RsWrap };
