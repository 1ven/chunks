import { PlainData } from '../../types';
interface Body {
    print(data: PlainData): string;
}
export { JsonBody } from './JsonBody';
export { XmlBody } from './XmlBody';
export { RawBody } from './RawBody';
export { Body };
