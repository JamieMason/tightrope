import { expect, it, vi } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { orElse } from './or-else';

it('returns original Ok when Ok', () => {
  expect(
    pipe(
      Ok.create(3),
      orElse(() => Ok.create(6)),
    ),
  ).toEqual(Ok.create(3));
});

it('returns mapped Ok when Err', () => {
  const spy = vi.fn(() => Ok.create('never gonna'));
  expect(
    pipe(
      Err.create<string, Error>(new Error('wat?')),
      orElse((err) => Ok.create(`Recovered from: ${err.message}`)),
      orElse(spy),
    ),
  ).toEqual(Ok.create('Recovered from: wat?'));
  expect(spy).not.toHaveBeenCalled();
});
