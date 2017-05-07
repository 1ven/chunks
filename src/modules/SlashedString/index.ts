export class SlashedString {
  constructor(private value: string) {}

  public read() {
    const result = this.value.replace(/^\/?(.*?)\/?$/, '/$1/');
    return result === '//' ? '/' : result;
  }
}