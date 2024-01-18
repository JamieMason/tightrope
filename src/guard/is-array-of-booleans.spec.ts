import { expect, it } from 'vitest';
import { isArrayOfBooleans } from './is-array-of-booleans.js';

it('returns true when every value in an array is a boolean', () => {
  expect(isArrayOfBooleans([true, new Boolean(true)])).toEqual(true);
  expect(isArrayOfBooleans([false, new Boolean(false)])).toEqual(true);
  expect(isArrayOfBooleans([])).toEqual(false);
  expect(isArrayOfBooleans([1, 0])).toEqual(false);
  expect(isArrayOfBooleans(true)).toEqual(false);
  expect(isArrayOfBooleans(false)).toEqual(false);
});
