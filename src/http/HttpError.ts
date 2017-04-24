import * as http from 'http';

class HttpError {
  public status: number;
  public message: string;

  constructor(status: number) {
    this.message = http.STATUS_CODES[status];
    this.status = status;
  }
}

export {
  HttpError,
}

