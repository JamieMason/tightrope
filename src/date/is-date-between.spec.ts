import { expect, test } from 'vitest';
import { isDateBetween } from './is-date-between.js';
import type { ValidDate } from './is-valid-date.js';

test('positive case', () => {
  const floor = new Date('2020-01-01') as ValidDate;
  const ceiling = new Date('2022-01-01') as ValidDate;
  const date = new Date('2021-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(true);
});

test('negative case - before floor', () => {
  const floor = new Date('2020-01-01') as ValidDate;
  const ceiling = new Date('2022-01-01') as ValidDate;
  const date = new Date('2019-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(false);
});

test('negative case - after ceiling', () => {
  const floor = new Date('2020-01-01') as ValidDate;
  const ceiling = new Date('2022-01-01') as ValidDate;
  const date = new Date('2023-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(false);
});
