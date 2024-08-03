import { expect, test } from 'vitest';
import { isEmptyString } from './is-empty-string.js';

test('positive case - empty string', () => {
  expect(isEmptyString('')).toBe(true);
});

test('negative case - non-empty string', () => {
  expect(isEmptyString('not empty')).toBe(false);
});

test('negative case - non-string value', () => {
  expect(isEmptyString(42)).toBe(false);
});

test('negative case - array', () => {
  expect(isEmptyString([])).toBe(false);
});
