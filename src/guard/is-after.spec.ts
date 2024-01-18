import { expect, it } from 'vitest';
import { isAfter } from './is-after.js';

const date1 = new Date(2023, 3, 1);
const date2 = new Date(2023, 3, 2);

it('positive case', () => {
  expect(isAfter(date1, date2)).toBe(true);
});

it('negative case with earlier date', () => {
  expect(isAfter(date2, date1)).toBe(false);
});

it('negative case with equal dates', () => {
  expect(isAfter(date1, date1)).toBe(false);
});

it('negative case with non-date values', () => {
  expect(isAfter('2023-04-01' as any, '2023-04-02' as any)).toBe(false);
});
