export type Request = {
  uri: string,
  method: string,
  body?: string,
  headers?: {
    [key: string]: string,
  },
}