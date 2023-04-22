import { expect, it } from 'vitest';
import { isDateOnOrAfter } from './is-date-on-or-after';

it('positive case - same date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z');
  const date2 = new Date('2021-01-01T00:00:00.000Z');
  expect(isDateOnOrAfter(date1, date2)).toBe(true);
});

it('positive case - later date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z');
  const date2 = new Date('2021-01-02T00:00:00.000Z');
  expect(isDateOnOrAfter(date1, date2)).toBe(true);
});

it('negative case - earlier date', () => {
  const date1 = new Date('2021-01-02T00:00:00.000Z');
  const date2 = new Date('2021-01-01T00:00:00.000Z');
  expect(isDateOnOrAfter(date1, date2)).toBe(false);
});

it('negative case - non-date input', () => {
  const date = new Date('2021-01-01T00:00:00.000Z');
  const nonDate = '2021-01-01T00:00:00.000Z';
  expect(isDateOnOrAfter(nonDate, date)).toBe(false);
});
