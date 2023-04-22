import { expect, it } from 'vitest';
import { isDateOnDayOfMonth } from './is-date-on-day-of-month';

it('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateOnDayOfMonth(15, date)).toBe(true);
});

it('negative case - different day of month', () => {
  const date = new Date('2021-01-16');
  expect(isDateOnDayOfMonth(15, date)).toBe(false);
});

it('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateOnDayOfMonth(15, nonDate)).toBe(false);
});
