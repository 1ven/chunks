/// <reference types="node" />
import * as net from 'net';
import { Back } from './index';
declare class BkSafe implements Back {
    private origin;
    constructor(back: Back);
    accept(socket: net.Socket): Promise<void | {}>;
}
export { BkSafe };
