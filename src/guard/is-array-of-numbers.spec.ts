import { expect, it } from 'vitest';
import { isArrayOfNumbers } from './is-array-of-numbers.js';

it('returns true when every value in an array is a boolean', () => {
  expect(isArrayOfNumbers([8, new Number(8)])).toEqual(true);
  expect(isArrayOfNumbers([0, new Number(0)])).toEqual(true);
  expect(isArrayOfNumbers([])).toEqual(false);
  expect(isArrayOfNumbers([1, '0'])).toEqual(false);
  expect(isArrayOfNumbers(8)).toEqual(false);
  expect(isArrayOfNumbers(0)).toEqual(false);
});
