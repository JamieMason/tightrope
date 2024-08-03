import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { orElse } from './or-else.js';
import { Err, Ok, type Result } from './result.js';

test('returns original Ok when Ok', () => {
  expect(
    pipe(
      Ok.create(3),
      orElse(() => Ok.create(6)),
    ),
  ).toEqual(Ok.create(3));
});

test('returns mapped Ok when Err', () => {
  const spy = vi.fn(() => Ok.create<string, Error>('never gonna'));
  expect<Result<string, Error>>(
    pipe(
      Err.create<Error, string>(new Error('wat?')),
      orElse(err => Ok.create(`Recovered from: ${err.message}`)),
      orElse(spy),
    ),
  ).toEqual(Ok.create('Recovered from: wat?'));
  expect(spy).not.toHaveBeenCalled();
});
