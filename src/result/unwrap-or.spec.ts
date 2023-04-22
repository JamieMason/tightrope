import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { unwrapOr } from './unwrap-or';

it('returns the provided Ok when Err', () => {
  expect(pipe(Err.create(new Error('wat?')), unwrapOr(Ok.create(2)))).toEqual(
    2,
  );
});

it('keeps the original Ok when Ok', () => {
  expect(
    pipe(Ok.create(2), unwrapOr(Ok.create<number, Error>(4)), (x) => x),
  ).toEqual(2);
});
