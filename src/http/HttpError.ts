import * as http from 'http';

class HttpError {
  public status: number;
  public message: string;

  constructor(status: number, message?: string) {
    this.message = message || http.STATUS_CODES[status];
    this.status = status;
  }
}

export {
  HttpError,
}

