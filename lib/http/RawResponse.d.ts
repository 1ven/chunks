import { Response } from '../response';
declare class RawResponse {
    private res;
    constructor(res: Response);
    print(): string;
    private makeStatusLine(status);
    private makeHeaders(headers?);
    private makeBody(body);
}
export { RawResponse };
