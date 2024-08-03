import { expect, test } from 'vitest';
import { isNone } from './is-none.js';
import { Some, none } from './option.js';

test('positive case - None object', () => {
  expect(isNone(none)).toBe(true);
});

test('negative case - Some object', () => {
  expect(isNone(Some.create(false))).toBe(false);
});

test('negative case - non-option object', () => {
  const nonOptionObj = { foo: 'bar' };
  expect(isNone(nonOptionObj)).toBe(false);
});
