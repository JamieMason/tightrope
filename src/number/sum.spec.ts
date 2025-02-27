import { expect, test } from 'vitest';
import { sum } from './sum.js';

test('returns the sum of two positive numbers', () => {
  const addFive = sum(5);
  expect(addFive(3)).toBe(8);
});

test('returns the sum of a positive number and a negative number', () => {
  const addThree = sum(3);
  expect(addThree(-2)).toBe(1);
});

test('returns the sum of two negative numbers', () => {
  const addMinusFour = sum(-4);
  expect(addMinusFour(-3)).toBe(-7);
});

test('returns the same number when adding zero', () => {
  const addZero = sum(0);
  expect(addZero(5)).toBe(5);
});
