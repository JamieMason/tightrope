import { expect, it } from 'vitest';
import { isBefore } from './is-before.js';

it('positive case - earlier date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z');
  const date2 = new Date('2021-01-02T00:00:00.000Z');
  expect(isBefore(date2, date1)).toBe(true);
});

it('negative case - later date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z');
  const date2 = new Date('2021-01-02T00:00:00.000Z');
  expect(isBefore(date1, date2)).toBe(false);
});

it('negative case - same date', () => {
  const date1 = new Date('2021-01-01T00:00:00.000Z');
  const date2 = new Date('2021-01-01T00:00:00.000Z');
  expect(isBefore(date1, date2)).toBe(false);
});
