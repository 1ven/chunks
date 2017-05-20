// import * as _ from 'lodash';
// import * as net from 'net';
// import * as parser from 'http-string-parser';
// import * as http from 'http';

// type Front = (port: number, callback?: Function) => void;

// type Chunk = (req: Request) => Response;
// type Request = {
//   uri: string,
//   method: string,
//   body?: string,
//   headers?: {
//     [key: string]: string,
//   },
// }
// type Response = {
//   status: string,
//   body?: string,
//   headers?: {
//     [key: string]: string,
//   },
// };

// const Basic = (chunk: Chunk): Front => {
//   return function(port: number, callback?: Function) {
//     const server = net.createServer();

//     server.on('connection', (socket: net.Socket) => {
//       socket.setEncoding('utf8');
//       socket.on('data', (raw: string) => {
//         const req: Request = ParsedRequest(raw);
//         const res: Response = chunk(req);

//         socket.end(printResponse(res), 'utf8');
//       });
//     });

//     server.listen(port, callback);
//   }
// }

// const ParsedRequest = (raw: string): Request => {
//   return parser.parseRequest(raw);
// }

// const printResponse = (res: Response): string => {
//   const makeStatusLine = (status: string): string => {
//     return `HTTP/1.1 ${status} ${http.STATUS_CODES[status]}`;
//   }

//   const makeHeaders = (headers?): string => {
//     if (_.isUndefined(headers)) {
//       return '';
//     }
//     return _.reduce(headers, (acc, value, key) => (
//       acc + `\n${key}: ${value}`
//     ), '');
//   }

//   const makeBody = (body): string => {
//     return !body ? '' : `\n\n${body}`;
//   }

//   return (
//     makeStatusLine(res.status) +
//     makeHeaders(res.headers) +
//     makeBody(res.body)
//   );
// }

// const withJson = (data): Response => {
//   return {
//     status: '200',
//     headers: {
//       'Content-Type': 'json',
//     },
//     body: JSON.stringify(data),
//   };
// }

// const withStatus = (value: string): Response => {
//   return {
//     status: value,
//   };
// }

// function IndexPage(req: Request): Response {
//   return withJson({
//     name: 'index',
//   });
// }

// function TestPage(req: Request): Response {
//   const data = {
//     name: 'test',
//   };

//   return R.merge(
//     withJson(data),
//     withStatus('400'),
//   );
// }

// function Fork(...chunks: Chunk[]) {
//   return function (req: Request): Response {
//     return _.reduce(chunks, (acc: Response, chunk: Chunk) => {
//       const res = chunk(req);
//       if (res.status === '404') {
//         return acc;
//       }
//       return res;
//     }, {
//       status: '404',
//     });
//   }
// }

// function Route(path: string, chunk: Chunk) {
//   return function (req: Request): Response {
//     return req.uri === path ? chunk(req) : {
//       status: '404',
//     }
//   }
// }

// const Method = (value: string, chunk: Chunk) => (req: Request): Response => (
//   req.method === value ? chunk(req) : Status('404')
// )

// const server = Basic(
//   Fork(
//     Route('/', IndexPage),
//     Route('/test', TestPage),
//   )
// )

// server(3000, () => console.log('Listening at 3000...'))

import {
  createServer,
} from './fn/';

import { fork, path } from './fn/chunk';
import { Request } from './fn/request';
import { Response, json } from './fn/response';

const Index = (): Response => {
  throw new Error('test');
};

const Contacts = (): Response => json({
  page: 'contacts',
});

const server = createServer(
  fork(
    path('/', Index),
    path('/contacts', Contacts),
  )
);

server(3000, () => console.log('Listening at 3000...'));