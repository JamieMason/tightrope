import { expect, test } from 'vitest';
import { subtract } from './subtract.js';

test('returns the difference of two positive numbers', () => {
  const subtractFive = subtract(5);
  expect(subtractFive(8)).toBe(3);
});

test('returns the difference of a positive number and a negative number', () => {
  const subtractThree = subtract(3);
  expect(subtractThree(-2)).toBe(-5);
});

test('returns the difference of two negative numbers', () => {
  const subtractMinusFour = subtract(-4);
  expect(subtractMinusFour(-3)).toBe(1);
});

test('returns the same number when subtracting zero', () => {
  const subtractZero = subtract(0);
  expect(subtractZero(5)).toBe(5);
});
