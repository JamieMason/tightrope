import { expect, it } from 'vitest';
import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { pipe } from '../fn/pipe';
import { isNumber } from '../guard/is-number';
import { fromGuard } from './from-guard';

it('returns Just if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect<maybe<number>>(someNumber).toEqual(new just(42));
});

it('returns Nothing if the value fails the guard', () => {
  const notNumber = pipe('not a number', fromGuard(isNumber));
  expect<maybe<number>>(notNumber).toEqual(nothing);
});
