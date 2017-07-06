declare module 'http-string-parser' {
  const value: any;
  export = value;
}

declare module 'url-pattern' {
  type Result = {
    [key: string]: string,
    _: string,
  } | null
}

// declare module 'ramda-fantasy' {
//   type Maybe<Result> = 
// }