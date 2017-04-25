import { Parsed } from './index';
import { Request } from '../index';
import { HttpError } from '../../http';

class PrJson implements Parsed {
  private req: Request;

  constructor(req: Request) {
    this.req = req;
  }

  public content() {
    try {
      return JSON.parse(this.req.body());
    } catch(err) {
      throw new HttpError(400, 'JSON is not valid');
    }
  }
}

export {
  PrJson,
}
