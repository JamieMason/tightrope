import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { match } from './match.js';
import type { Result } from './result.js';
import { Err, Ok } from './result.js';

test.each<[Result<string, Error>, string]>([
  [Ok.create('Hi'), 'Hi!'],
  [Err.create(new Error('wat?')), 'Error was: wat?'],
])('returns the first case which is true', (result, expected) => {
  expect(
    pipe(
      result,
      match({
        Ok: value => `${value}!`,
        Err: err => `Error was: ${err.message}`,
      }),
    ),
  ).toEqual(expected);
});

test('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Result<string, Error>,
      match({
        Ok: value => `${value}!`,
        Err: err => `Error was: ${err.message}`,
      }),
    );
  }).toThrow();
});
