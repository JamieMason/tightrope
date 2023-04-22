import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { unwrapOrElse } from './unwrap-or-else';

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
