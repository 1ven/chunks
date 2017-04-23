interface Response {
    head(): ResponseHead;
    body(): string;
}
export declare type ResponseHead = {
    status: number;
    headers?: JSON;
};
declare function isResponse(arg: any): arg is Response;
export { Response, isResponse };
