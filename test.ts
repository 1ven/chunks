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
    return new Promise((resolve, reject) => {
      throw new Error('test');
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
      new Index()
    ),
  ),
).start(3000, () => console.log('Server is listening at 3000'));
