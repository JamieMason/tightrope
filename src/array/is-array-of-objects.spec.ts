import { expect, test } from 'vitest';
import { isArrayOfObjects } from './is-array-of-objects.js';

test('positive case with objects', () => {
  expect(isArrayOfObjects([{}, new Object()])).toBe(true);
});

test('negative case with non-object values', () => {
  expect(isArrayOfObjects([1, 'string', true])).toBe(false);
});

test('negative case with mixed values', () => {
  expect(isArrayOfObjects([{}, 'string', 1])).toBe(false);
});

test('negative case with non-array values', () => {
  expect(isArrayOfObjects('not an array')).toBe(false);
});
