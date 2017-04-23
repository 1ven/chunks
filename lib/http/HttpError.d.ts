declare class HttpError {
    private status;
    private message;
    constructor(status: number);
    readStatus(): number;
}
export { HttpError };
