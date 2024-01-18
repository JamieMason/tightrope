import { expect, it } from 'vitest';
import { isArrayOfObjects } from './is-array-of-objects.js';

it('positive case with objects', () => {
  expect(isArrayOfObjects([{}, new Object()])).toBe(true);
});

it('negative case with non-object values', () => {
  expect(isArrayOfObjects([1, 'string', true])).toBe(false);
});

it('negative case with mixed values', () => {
  expect(isArrayOfObjects([{}, 'string', 1])).toBe(false);
});

it('negative case with non-array values', () => {
  expect(isArrayOfObjects('not an array')).toBe(false);
});
