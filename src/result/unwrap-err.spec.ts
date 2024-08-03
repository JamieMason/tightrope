import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './result.js';
import { unwrapErr } from './unwrap-err.js';

test('returns the wrapped value from an Err', () => {
  expect(pipe(Err.create(new Error('wat')), unwrapErr)).toEqual(
    new Error('wat'),
  );
});

test('throws when value is an Ok', () => {
  expect(() => pipe(Ok.create(2), unwrapErr)).toThrow(
    new Error('unwrapErr encountered Ok<2>'),
  );
});
