import { times, merge } from 'ramda';
import { fork } from '../';
import { makeResponse } from '../../';
import { status, body } from '../../../response';

// TODO: move to generic core
const req = {
  uri: '/',
  method: 'GET',
}

declare const expect: (actual: any) => jest.Matchers & {
  resolves: jest.Matchers,
  rejects: jest.Matchers,
}

test('returns default 404 response for all 404 chunks provided', () => {
  const chunk = fork(...times(make404chunks, 5));

  return expect(chunk(req)).resolves.toEqual(status(404));
});

test('returns first successful chunk', () => {
  const chunk = fork(...times(makeSucChunks, 5));

  return expect(chunk(req)).resolves.toHaveProperty('body', 0);
});

const makeSucChunks = (i: number) => (
  (req) => makeResponse(
    body(i)
  )
)

const make404chunks = (i: number) => (
  (req) => makeResponse(
    merge(body(i), status(404)),
  )
)