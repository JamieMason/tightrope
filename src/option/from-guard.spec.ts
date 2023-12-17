import { expect, it } from 'vitest';
import type { Option } from '.';
import { none, Some } from '.';
import { pipe } from '../fn/pipe';
import { isNumber } from '../guard/is-number';
import { fromGuard } from './from-guard';

it('returns Some if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect<Option<number>>(someNumber).toEqual(new Some(42));
});

it('returns None if the value fails the guard', () => {
  const notNumber = pipe('not a number', fromGuard(isNumber));
  expect<Option<number>>(notNumber).toEqual(none);
});
