import { Front, Back } from './index';
import { Chunk } from '../chunk';
declare class FtBasic implements Front {
    private back;
    constructor(chunk: Chunk);
    constructor(back: Back);
    start(port: number, callback?: Function): void;
}
export { FtBasic };
