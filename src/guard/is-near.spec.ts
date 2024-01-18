import { expect, it } from 'vitest';
import { isNear } from './is-near.js';

it('positive case', () => {
  expect(isNear(5, 0.1, 5.05)).toBe(true);
});

it('negative case - outside of epsilon range', () => {
  expect(isNear(5, 0.1, 5.2)).toBe(false);
});

it('negative case - non-number value', () => {
  expect(isNear(5, 0.1, '5.05')).toBe(false);
});

it('positive case - negative numbers inside range', () => {
  expect(isNear(-5, 0.1, -5.05)).toBe(true);
});

it('negative case - negative numbers outside range', () => {
  expect(isNear(-5, 0.1, -5.2)).toBe(false);
});
