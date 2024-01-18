import { expect, it } from 'vitest';
import { isJestEqual } from './is-jest-equal.js';

it('returns true when comparing equal primitives', () => {
  expect.assertions(1);
  const value: unknown = 42;
  const other = 42;
  if (isJestEqual(other, value)) {
    expect<42>(value).toBe(42);
  }
});

it('returns true when comparing unequal primitives', () => {
  expect.assertions(1);
  const value: unknown = 42;
  const other = 'nope';
  if (isJestEqual(other, value) === false) {
    expect<unknown>(value).toBe(42);
  }
});

it('returns true when comparing equal subsets of objects', () => {
  expect.assertions(1);
  type Obj = { a: number };
  const value: unknown = { a: 1, b: 2 };
  const other = expect.objectContaining({ a: 1 });
  if (isJestEqual(other, value)) {
    expect<Obj>(value).toBe(value);
  }
});

it('returns false when comparing unequal objects', () => {
  const value: unknown = { a: 1, b: 3 };
  const other = expect.objectContaining({ a: 2 });
  expect(isJestEqual(other, value)).toBe(false);
});
