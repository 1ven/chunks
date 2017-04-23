/// <reference types="node" />
import * as net from 'net';
import { Response } from '../response';
declare class HttpResponse {
    private res;
    constructor(res: Response);
    send(socket: net.Socket): Promise<{}>;
}
export { HttpResponse };
