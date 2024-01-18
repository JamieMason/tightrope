import { expect, it } from 'vitest';
import { isDateInYear } from './is-date-in-year.js';

it('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateInYear(2021, date)).toBe(true);
});

it('negative case - different year', () => {
  const date = new Date('2020-01-15');
  expect(isDateInYear(2021, date)).toBe(false);
});

it('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateInYear(2021, nonDate)).toBe(false);
});
