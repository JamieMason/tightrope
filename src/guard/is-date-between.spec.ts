import { expect, it } from 'vitest';
import { isDateBetween } from './is-date-between';

it('positive case', () => {
  const floor = new Date('2020-01-01');
  const ceiling = new Date('2022-01-01');
  const date = new Date('2021-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(true);
});

it('negative case - before floor', () => {
  const floor = new Date('2020-01-01');
  const ceiling = new Date('2022-01-01');
  const date = new Date('2019-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(false);
});

it('negative case - after ceiling', () => {
  const floor = new Date('2020-01-01');
  const ceiling = new Date('2022-01-01');
  const date = new Date('2023-01-01');
  expect(isDateBetween(floor, ceiling, date)).toBe(false);
});
