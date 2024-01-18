import { expect, it } from 'vitest';
import { isDateInMonth } from './is-date-in-month.js';

it('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateInMonth(0, date)).toBe(true);
});

it('negative case - different month', () => {
  const date = new Date('2021-02-15');
  expect(isDateInMonth(0, date)).toBe(false);
});

it('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateInMonth(0, nonDate)).toBe(false);
});
