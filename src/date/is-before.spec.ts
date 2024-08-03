import { expect, test } from 'vitest';
import { isBefore } from './is-before.js';
import type { ValidDate } from './is-valid-date.js';

test('positive case - earlier date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z') as ValidDate;
  const date2 = new Date('2021-01-02T00:00:00.000Z') as ValidDate;
  expect(isBefore(date2, date1)).toBe(true);
});

test('negative case - later date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z') as ValidDate;
  const date2 = new Date('2021-01-02T00:00:00.000Z') as ValidDate;
  expect(isBefore(date1, date2)).toBe(false);
});

test('negative case - same date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z') as ValidDate;
  const date2 = new Date('2021-01-01T00:00:00.000Z') as ValidDate;
  expect(isBefore(date1, date2)).toBe(false);
});
