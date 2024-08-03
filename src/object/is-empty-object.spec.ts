import { expect, test } from 'vitest';
import { isEmptyObject } from './is-empty-object.js';

test('positive case - empty object', () => {
  expect(isEmptyObject({})).toBe(true);
});

test('negative case - non-empty object', () => {
  expect(isEmptyObject({ key: 'value' })).toBe(false);
});

test('negative case - non-object value', () => {
  expect(isEmptyObject('not an object')).toBe(false);
});

test('negative case - array', () => {
  expect(isEmptyObject([])).toBe(false);
});
