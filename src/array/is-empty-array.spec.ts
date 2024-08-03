import { expect, test } from 'vitest';
import { isEmptyArray } from './is-empty-array.js';

test('positive case - empty array', () => {
  expect(isEmptyArray([])).toBe(true);
});

test('negative case - non-empty array', () => {
  expect(isEmptyArray([1, 2, 3])).toBe(false);
});

test('negative case - non-array value', () => {
  expect(isEmptyArray('not an array')).toBe(false);
});
