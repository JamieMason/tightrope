import { expect, it } from 'vitest';
import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

it('positive case', () => {
  const date = new Date('2023-04-02'); // Sunday
  expect(isDateOnDayOfWeek(0, date)).toBe(true);
});

it('negative case - different day of week', () => {
  const date = new Date('2023-04-01'); // Saturday
  expect(isDateOnDayOfWeek(0, date)).toBe(false);
});

it('negative case - non-date input', () => {
  const nonDate = '2023-04-01';
  expect(isDateOnDayOfWeek(0, nonDate)).toBe(false);
});
