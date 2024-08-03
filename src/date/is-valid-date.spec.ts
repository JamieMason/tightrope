import { expect, test } from 'vitest';
import { isValidDate } from './is-valid-date.js';

test('positive case', () => {
  expect(isValidDate(new Date())).toBe(true);
});

test('positive case with valid date string', () => {
  expect(isValidDate(new Date('2022-01-01'))).toBe(true);
});

test('negative case with invalid date string', () => {
  expect(isValidDate(new Date('invalid-date'))).toBe(false);
});

test('negative case with non-date value', () => {
  expect(isValidDate('2022-01-01' as any)).toBe(false);
});
