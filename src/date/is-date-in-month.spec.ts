import { expect, test } from 'vitest';
import { isDateInMonth } from './is-date-in-month.js';

test('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateInMonth(0, date)).toBe(true);
});

test('negative case - different month', () => {
  const date = new Date('2021-02-15');
  expect(isDateInMonth(0, date)).toBe(false);
});

test('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateInMonth(0, nonDate)).toBe(false);
});
