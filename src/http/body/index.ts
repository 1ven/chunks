interface Body {
  print(data: JSON): string,
}

export { JsonBody } from './JsonBody';
export { XmlBody } from './XmlBody';

export {
  Body,
}
