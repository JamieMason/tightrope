import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './result.js';
import { unwrapOr } from './unwrap-or.js';

test('returns the provided fallback when Err', () => {
  expect(pipe(Err.create(new Error('wat?')), unwrapOr(2))).toEqual(2);
});

test('returns the value when Ok', () => {
  expect(pipe(Ok.create(2), unwrapOr(4))).toEqual(2);
});
