import { expect, test } from 'vitest';
import { isPrimitive } from './is-primitive.js';

test('returns true for null, undefined, numbers, strings, and booleans', () => {
  expect(isPrimitive(null)).toBe(true);
  expect(isPrimitive(undefined)).toBe(true);
  expect(isPrimitive(0)).toBe(true);
  expect(isPrimitive(42)).toBe(true);
  expect(isPrimitive(-42)).toBe(true);
  expect(isPrimitive('')).toBe(true);
  expect(isPrimitive('foo')).toBe(true);
  expect(isPrimitive(true)).toBe(true);
  expect(isPrimitive(false)).toBe(true);
});

test('returns false for objects, arrays, and functions', () => {
  expect(isPrimitive({})).toBe(false);
  expect(isPrimitive([])).toBe(false);
  expect(
    isPrimitive(() => {
      /*.*/
    }),
  ).toBe(false);
});
