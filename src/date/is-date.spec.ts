import { expect, test } from 'vitest';
import { isDate } from './is-date.js';

test('positive case', () => {
  expect(isDate(new Date())).toBe(true);
});

test('positive case with valid date string', () => {
  expect(isDate(new Date('2022-01-01'))).toBe(true);
});

test('invalid dates are still dates', () => {
  expect(isDate(new Date('invalid-date'))).toBe(true);
});

test('negative case with non-date value', () => {
  expect(isDate('2022-01-01' as any)).toBe(false);
});
