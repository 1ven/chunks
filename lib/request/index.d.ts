interface Request {
    head(): RequestHead;
    body(): string;
}
export declare type RequestHead = {
    uri: string;
    method: string;
    headers?: JSON;
};
export { Request };
