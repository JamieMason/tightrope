import { expect, it } from 'vitest';
import { isEmptyArray } from './is-empty-array.js';

it('positive case - empty array', () => {
  expect(isEmptyArray([])).toBe(true);
});

it('negative case - non-empty array', () => {
  expect(isEmptyArray([1, 2, 3])).toBe(false);
});

it('negative case - non-array value', () => {
  expect(isEmptyArray('not an array')).toBe(false);
});
