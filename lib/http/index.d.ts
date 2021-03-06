/// <reference types="node" />
import * as net from 'net';
interface Back {
    accept(socket: net.Socket): void;
}
interface Front {
    start(port: number, callback?: Function): void;
}
declare function isBack(arg: any): arg is Back;
export { BkBasic } from './BkBasic';
export { FtBasic } from './FtBasic';
export { ParsedRequest } from './ParsedRequest';
export { HttpResponse } from './HttpResponse';
export { HttpError } from './HttpError';
export { RawResponse } from './RawResponse';
export { Back, Front, isBack };
