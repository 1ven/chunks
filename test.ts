import {
  FtBasic,
  BkBasic,
  BkSafe,
  RsJson,
  HttpError,
  CkFork,
  CkRoute,
  CkMethods,
  RouteChunk,
  RouteRequest,
} from './src';

class Index {
  act(req) {
    return new Promise((resolve) => {
      resolve(new RsJson({
        page: 'index',
      }));
    });
  }
}

class Test implements RouteChunk {
  act(req: RouteRequest) {
    return Promise.resolve(new RsJson({
      page: 'test',
    }));
  }
}

new FtBasic(
  new BkSafe(
    new BkBasic(
      new CkFork(
        new CkRoute('/', new CkMethods('GET, POST', new Index())),
        new CkRoute('/tickets*', new CkFork(
          new CkRoute('/', new Test())
        )),
        /* new CkRoute('/test/:id*', ( */
        /*   new CkRoute('/hello', new Test()) */
        /* )), */
      ),
    ),
  ),
).start(3000, () => console.log('Server is listening at 3000'));
