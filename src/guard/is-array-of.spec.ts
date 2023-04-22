import { expect, it } from 'vitest';
import { isArrayOf } from './is-array-of';
import { isGreaterThan } from './is-greater-than';

it('returns true when every value passes the guard', () => {
  expect(isArrayOf(isGreaterThan(2), [5, 3, 6])).toEqual(true);
  expect(isArrayOf(isGreaterThan(2), [0, 1, 5])).toEqual(false);
  expect(isArrayOf(isGreaterThan(2), [3, 1, 7])).toEqual(false);
  expect(isArrayOf(isGreaterThan(2), [1, 3, 3])).toEqual(false);
});
