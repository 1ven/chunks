import * as http from 'http';

class HttpError {
  private status: number;
  private message: string;

  constructor(status: number) {
    this.message = http.STATUS_CODES[status];
    this.status = status;
  }

  public readStatus() {
    return this.status;
  }
}

export {
  HttpError,
}

