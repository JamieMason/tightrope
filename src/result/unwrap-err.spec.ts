import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { pipe } from '../fn/pipe.js';
import { unwrapErr } from './unwrap-err.js';

it('returns the wrapped value from an Err', () => {
  expect(pipe(Err.create(new Error('wat')), unwrapErr)).toEqual(
    new Error('wat'),
  );
});

it('throws when value is an Ok', () => {
  expect(() => pipe(Ok.create(2), unwrapErr)).toThrow(
    new Error('unwrapErr encountered Ok<2>'),
  );
});
