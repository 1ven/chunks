import { Request } from './index';
export declare class RqWrap implements Request {
    private origin;
    constructor(origin: Request);
    head(): {
        uri: string;
        method: string;
        headers?: {
            [key: string]: any;
        };
    };
    body(): string;
}
