import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import type { Result } from './index.js';
import { Err, Ok } from './index.js';
import { match } from './match.js';

it.each([
  [Ok.create('Hi'), 'Hi!'],
  [Err.create(new Error('wat?')), 'Error was: wat?'],
] satisfies [Result<string, Error>, string][])(
  'returns the first case which is true',
  (result, expected) => {
    expect(
      pipe(
        result,
        match({
          Ok: value => `${value}!`,
          Err: err => `Error was: ${err.message}`,
        }),
      ),
    ).toEqual(expected);
  },
);

it('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Result<null, Error>,
      match({
        Ok: value => `${value}!`,
        Err: err => `Error was: ${err.message}`,
      }),
    );
  }).toThrow();
});
