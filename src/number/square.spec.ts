import { expect, test } from 'vitest';
import { square } from './square.js';

test('returns the square of a positive number', () => {
  expect(square(3)).toBe(9);
});

test('returns the square of a negative number', () => {
  expect(square(-4)).toBe(16);
});

test('returns the square of zero', () => {
  expect(square(0)).toBe(0);
});
