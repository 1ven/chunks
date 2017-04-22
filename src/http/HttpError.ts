class HttpError {
  private status: number;
  private message: string;

  constructor(status: number) {
    this.message = `HTTP exception with status ${status}`;
    this.status = status;
  }

  public readStatus() {
    return this.status;
  }
}

export {
  HttpError,
}

