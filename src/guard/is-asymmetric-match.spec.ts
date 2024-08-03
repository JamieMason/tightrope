import { expect, test } from 'vitest';
import { isAsymmetricMatch } from './is-asymmetric-match.js';

test('returns true when comparing equal primitives', () => {
  expect.assertions(1);
  const value: unknown = 42;
  const other = 42;
  // @ts-ignore @TODO: finish isAsymmetricMatch
  if (isAsymmetricMatch(other, value)) {
    expect<42>(value).toBe(42);
  }
});

test('returns false when comparing unequal primitives', () => {
  expect.assertions(1);
  const value: unknown = 42;
  const other = 'nope';
  // @ts-ignore @TODO: finish isAsymmetricMatch
  if (isAsymmetricMatch(other, value) === false) {
    expect<unknown>(value).toBe(42);
  }
});

test('returns true when comparing equal subsets of objects', () => {
  expect.assertions(1);
  type Obj = { a: number };
  const value: unknown = { a: 1, b: 2 };
  const other = expect.objectContaining({ a: 1 });
  if (isAsymmetricMatch(other, value)) {
    // @ts-ignore @TODO: finish isAsymmetricMatch
    expect<Obj>(value).toBe(value);
  }
});

test('returns false when comparing unequal objects', () => {
  const value: unknown = { a: 1, b: 3 };
  const other = expect.objectContaining({ a: 2 });
  expect(isAsymmetricMatch(other, value)).toBe(false);
});
