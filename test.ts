import { FtBasic, BkBasic, BkSafe, RsJson, HttpError } from './src';

class Page {
  act(req) {
    /* if (req) { */
    /*   throw new HttpError(400); */
    /* } */
    return new RsJson(JSON.parse(req.body()));
  }
}

new FtBasic(
  new BkSafe(
    new BkBasic(
      new Page(),
    ),
  ),
).start(3000, () => console.log('Server is listening at 3000'));
