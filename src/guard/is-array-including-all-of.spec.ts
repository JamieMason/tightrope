import { expect, it } from 'vitest';
import { isArrayIncludingAllOf } from './is-array-including-all-of.js';

const requiredValues = [1, 2, 3];
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 7, 9];
const array3 = [4, 6, 8, 10];

it('positive case', () => {
  expect(isArrayIncludingAllOf(requiredValues, array1)).toBe(true);
});

it('negative case with some required values missing', () => {
  expect(isArrayIncludingAllOf(requiredValues, array2)).toBe(false);
});

it('negative case with all required values missing', () => {
  expect(isArrayIncludingAllOf(requiredValues, array3)).toBe(false);
});

it('negative case with non-array values', () => {
  expect(isArrayIncludingAllOf(requiredValues, '1, 2, 3, 4, 5')).toBe(false);
});
