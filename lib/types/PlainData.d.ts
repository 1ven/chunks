import { PlainObject } from './PlainObject';
export declare type PlainData = (number | string | PlainObject | any[]);
export declare function isPlainData(arg: any): arg is PlainData;
