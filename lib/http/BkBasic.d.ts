/// <reference types="node" />
import * as net from 'net';
import { Back } from './index';
import { Chunk } from '../chunk';
declare class BkBasic implements Back {
    private chunk;
    constructor(chunk: Chunk);
    accept(socket: net.Socket): Promise<{}>;
}
export { BkBasic };
