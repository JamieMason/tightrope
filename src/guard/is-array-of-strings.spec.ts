import { expect, it } from 'vitest';
import { isArrayOfStrings } from './is-array-of-strings';

it('returns true when every value in an array is a boolean', () => {
  expect(isArrayOfStrings(['A', new String('A')])).toEqual(true);
  expect(isArrayOfStrings(['', new String('')])).toEqual(true);
  expect(isArrayOfStrings([])).toEqual(false);
  expect(isArrayOfStrings([1, ''])).toEqual(false);
  expect(isArrayOfStrings('A')).toEqual(false);
  expect(isArrayOfStrings('')).toEqual(false);
});
