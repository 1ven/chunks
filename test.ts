import { FtBasic, RsJson } from './src';

class Page {
  act(req) {
    return new RsJson({
      'test': 'value',
    });
  }
}

new FtBasic(
  new Page(),
  3000,
).start(() => console.log('Server is listening at 3000'));
