import { expect, test } from 'vitest';
import { isNonEmptyObject } from './is-non-empty-object.js';

test('positive case', () => {
  expect(isNonEmptyObject({ foo: 'bar' })).toBe(true);
});

test('negative case - empty object', () => {
  expect(isNonEmptyObject({})).toBe(false);
});

test('negative case - non-object', () => {
  expect(isNonEmptyObject('foo')).toBe(false);
  expect(isNonEmptyObject(null)).toBe(false);
});
