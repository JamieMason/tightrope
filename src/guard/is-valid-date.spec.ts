import { expect, it } from 'vitest';
import { isValidDate } from './is-valid-date';

it('positive case', () => {
  expect(isValidDate(new Date())).toBe(true);
});

it('positive case with valid date string', () => {
  expect(isValidDate(new Date('2022-01-01'))).toBe(true);
});

it('negative case with invalid date string', () => {
  expect(isValidDate(new Date('invalid-date'))).toBe(false);
});

it('negative case with non-date value', () => {
  expect(isValidDate('2022-01-01' as any)).toBe(false);
});
