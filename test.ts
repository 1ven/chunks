import { FtBasic, BkBasic, BkSafe, RsJson, HttpError, CkFork, CkRegEx, CkMethods } from './src';

class Index {
  act(req) {
    return new RsJson({
      page: 'index',
    });
  }
}

class Test {
  act(req) {
    return new RsJson({
      page: 'test',
    });
  }
}

new FtBasic(
  new BkSafe(
    new BkBasic(
      new CkFork(
        new CkRegEx('/', new CkMethods('GET, POST', new Index())),
        new CkRegEx('/test', new Test()),
      ),
    ),
  ),
).start(3000, () => console.log('Server is listening at 3000'));
