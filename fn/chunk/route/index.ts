import * as UrlPattern from 'url-pattern';
import { T, useWith, nthArg, applySpec, prop, merge, compose, cond, isNil, omit, map, curry, replace, identity, equals, always } from 'ramda';
import { Maybe } from 'ramda-fantasy';
import { Request } from '../../request';
import { Response, status } from '../../response';
import { Chunk, makeResponse } from '../';
import { Params, Matched, RouteRequest, RouteChunk, isRouteRequest } from './types';

// WARN: Do not use point-free style everywhere. Use it in places where it really makes sence and
// makes code more clearer and easy to understand

export const route = (template: string, chunk: Chunk) => (
  (req: Request | RouteRequest): Promise<Response> => {
    return new Promise((resolve, reject) => {
      resolve(
        Maybe.maybe(
          status(404),
          toResponse(req, chunk),
          exec(template, req),
        )
      )
    });
  }
)

type _exec = (template: string, req: Request) => Maybe<Matched>;
type _path = (req: Request) => string;
type _escape = (input: string) => string;
type _toMatched = (result: UrlPattern.Result) => Matched;
type _withParams = (req: Request | RouteRequest, params: Params) => Params;

const toResponse = (req: Request | RouteRequest, chunk: Chunk) => (
  ({ rest, params }: Matched) => (
    chunk(merge(req, {
      rest,
      params: withParams(req, params),
    }))
  )
)

// move to separate file, where will be handling UrlPattern lib stuff / matching stuff like match.ts
const toMatched = applySpec({ rest: prop('_'), params: omit(['_']) }) as _toMatched

const double = cond([[equals('//'), always('/')], [T, identity]]) as _escape;
const escape = compose(double, replace(/^\/?(.*?)\/?$/, '/$1/')) as _escape;

const match: Maybe<UrlPattern.Result> = curry((template: string, req: Request | RouteRequest) => (
  Maybe.toMaybe(new UrlPattern(escape(template)).match(escaped(req)))
)) 

const pattern = curry((t: string, input: string) => (
  new UrlPattern(t).match(input)
));

// TODO: rethink func name
// TODO: rethink func args
const withParams = cond([
  [isRouteRequest, useWith(merge, [prop('params'), identity])],
  [T, nthArg(1)]
]) as _withParams;

// TODO: use getPath in `compose`
const exec = compose(map(toMatched), match) as _exec;

const path = cond([[isRouteRequest, prop('rest')], [T, prop('uri')]]) as _path
const escaped = compose(escape, path) as _path;

const m = compose(Maybe.toMaybe, useWith(pattern, [escape, escaped]));
