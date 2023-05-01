import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { unwrapOr } from './unwrap-or';

it('returns the provided fallback when Err', () => {
  expect(pipe(Err.create(new Error('wat?')), unwrapOr(2))).toEqual(2);
});

it('keeps the original Ok when Ok', () => {
  expect(pipe(Ok.create(2), unwrapOr(4), (x) => x)).toEqual(2);
});
