import { expect, test } from 'vitest';
import { multiply } from './multiply.js';

test('returns the product of two positive numbers', () => {
  const multiplyByFive = multiply(5);
  expect(multiplyByFive(3)).toBe(15);
});

test('returns the product of a positive number and a negative number', () => {
  const multiplyByThree = multiply(3);
  expect(multiplyByThree(-2)).toBe(-6);
});

test('returns the product of two negative numbers', () => {
  const multiplyByMinusFour = multiply(-4);
  expect(multiplyByMinusFour(-3)).toBe(12);
});

test('returns zero when multiplying by zero', () => {
  const multiplyByZero = multiply(0);
  expect(multiplyByZero(5)).toBe(0);
});
