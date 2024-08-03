import { expect, test } from 'vitest';
import { isNear } from './is-near.js';

test('positive case', () => {
  expect(isNear(5, 0.1, 5.05)).toBe(true);
});

test('negative case - outside of epsilon range', () => {
  expect(isNear(5, 0.1, 5.2)).toBe(false);
});

test('negative case - non-number value', () => {
  expect(isNear(5, 0.1, '5.05')).toBe(false);
});

test('positive case - negative numbers inside range', () => {
  expect(isNear(-5, 0.1, -5.05)).toBe(true);
});

test('negative case - negative numbers outside range', () => {
  expect(isNear(-5, 0.1, -5.2)).toBe(false);
});
