import { expect, it } from 'vitest';
import type { Maybe } from '.';
import { nothing, Just } from '.';
import { pipe } from '../fn/pipe';
import { isNumber } from '../guard/is-number';
import { fromGuard } from './from-guard';

it('returns Just if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect<Maybe<number>>(someNumber).toEqual(new Just(42));
});

it('returns Nothing if the value fails the guard', () => {
  const notNumber = pipe('not a number', fromGuard(isNumber));
  expect<Maybe<number>>(notNumber).toEqual(nothing);
});
