import { expect, test } from 'vitest';
import { isArrayIncludingAnyOf } from './is-array-including-any-of.js';

const allowedValues = [1, 2, 3];
const array1 = [1, 4, 5, 6];
const array2 = [4, 5, 6, 7];
const array3 = [1, 2, 3, 4, 5];

test('positive case with one allowed value', () => {
  expect(isArrayIncludingAnyOf(allowedValues, array1)).toBe(true);
});

test('negative case with no allowed values', () => {
  expect(isArrayIncludingAnyOf(allowedValues, array2)).toBe(false);
});

test('positive case with all allowed values', () => {
  expect(isArrayIncludingAnyOf(allowedValues, array3)).toBe(true);
});

test('negative case with non-array values', () => {
  expect(isArrayIncludingAnyOf(allowedValues, '1, 4, 5, 6')).toBe(false);
});
