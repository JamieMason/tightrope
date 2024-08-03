import { expect, test } from 'vitest';
import { isDateOnDayOfMonth } from './is-date-on-day-of-month.js';

test('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateOnDayOfMonth(15, date)).toBe(true);
});

test('negative case - different day of month', () => {
  const date = new Date('2021-01-16');
  expect(isDateOnDayOfMonth(15, date)).toBe(false);
});

test('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateOnDayOfMonth(15, nonDate)).toBe(false);
});
