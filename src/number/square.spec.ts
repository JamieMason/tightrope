import { expect, it } from 'vitest';
import { square } from './square';

it('returns the square of a positive number', () => {
  expect(square(3)).toBe(9);
});

it('returns the square of a negative number', () => {
  expect(square(-4)).toBe(16);
});

it('returns the square of zero', () => {
  expect(square(0)).toBe(0);
});
