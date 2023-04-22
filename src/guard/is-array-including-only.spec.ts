import { expect, it } from 'vitest';
import { isArrayIncludingOnly } from './is-array-including-only';

const allowedValues = [1, 2, 3];
const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 1, 2, 3];
const array4 = [3, 2, 1];

it('positive case with all allowed values', () => {
  expect(isArrayIncludingOnly(allowedValues, array1)).toBe(true);
});

it('negative case with additional values', () => {
  expect(isArrayIncludingOnly(allowedValues, array2)).toBe(false);
});

it('positive case with duplicate allowed values', () => {
  expect(isArrayIncludingOnly(allowedValues, array3)).toBe(true);
});

it('positive case with allowed values in different order', () => {
  expect(isArrayIncludingOnly(allowedValues, array4)).toBe(true);
});

it('negative case with non-array values', () => {
  expect(isArrayIncludingOnly(allowedValues, '1, 2, 3')).toBe(false);
});
