import { expect, test } from 'vitest';
import { isDateInYear } from './is-date-in-year.js';

test('positive case', () => {
  const date = new Date('2021-01-15');
  expect(isDateInYear(2021, date)).toBe(true);
});

test('negative case - different year', () => {
  const date = new Date('2020-01-15');
  expect(isDateInYear(2021, date)).toBe(false);
});

test('negative case - non-date input', () => {
  const nonDate = '2021-01-15';
  expect(isDateInYear(2021, nonDate)).toBe(false);
});
