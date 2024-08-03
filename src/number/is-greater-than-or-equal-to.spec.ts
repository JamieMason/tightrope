import { expect, test } from 'vitest';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to.js';

test('positive case - equal', () => {
  expect(isGreaterThanOrEqualTo(3, 3)).toBe(true);
});

test('positive case - greater', () => {
  expect(isGreaterThanOrEqualTo(2, 4)).toBe(true);
});

test('negative case - less', () => {
  expect(isGreaterThanOrEqualTo(5, 4)).toBe(false);
});

test('negative case - non-number value', () => {
  expect(isGreaterThanOrEqualTo(3, '4')).toBe(false);
});

test('negative case - non-number other', () => {
  expect(isGreaterThanOrEqualTo('3' as any, 4)).toBe(false);
});
