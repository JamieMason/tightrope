import { expect, it } from 'vitest';
import { none } from '.';
import { pipe } from '../fn/pipe';
import { isNumber } from '../guard/is-number';
import { fromGuard } from './from-guard';
import { unwrap } from './unwrap';

it('returns Some if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect(unwrap(someNumber)).toBe(42);
});

it('returns None if the value fails the guard', () => {
  expect(pipe('not a number', fromGuard(isNumber))).toEqual(none);
});
