import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './result.js';
import { unwrapOrElse } from './unwrap-or-else.js';

test('returns wrapped value when Ok', () => {
  expect<number>(
    pipe(
      Ok.create(3),
      unwrapOrElse(() => 6),
    ),
  ).toEqual(3);
});

test('returns mapped wrapped Err value when Err', () => {
  expect<string>(
    pipe(
      Err.create<Error, string>(new Error('wat?')),
      unwrapOrElse(err => `Recovered from: ${err.message}`),
    ),
  ).toEqual('Recovered from: wat?');
});
