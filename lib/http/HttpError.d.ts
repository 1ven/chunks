declare class HttpError {
    status: number;
    message: string;
    constructor(status: number, message?: string);
}
export { HttpError };
