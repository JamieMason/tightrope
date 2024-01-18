import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { pipe } from '../fn/pipe.js';
import { unwrapOrElse } from './unwrap-or-else.js';

it('returns wrapped value when Ok', () => {
  expect(
    pipe(
      Ok.create(3),
      unwrapOrElse(() => Ok.create(6)),
    ),
  ).toEqual(3);
});

it('returns wrapped mapped Ok when Err', () => {
  expect(
    pipe(
      Err.create<string, Error>(new Error('wat?')),
      unwrapOrElse((err) => Ok.create(`Recovered from: ${err.message}`)),
    ),
  ).toEqual('Recovered from: wat?');
});
