import { expect, it } from 'vitest';
import { isJestEqual } from './is-jest-equal';

it('positive case - equal primitives', () => {
  expect(isJestEqual(42, 42)).toBe(true);
  expect(isJestEqual('hello', 'hello')).toBe(true);
  expect(isJestEqual(true, true)).toBe(true);
});

it('negative case - unequal primitives', () => {
  expect(isJestEqual(42, '42')).toBe(false);
  expect(isJestEqual(42, 43)).toBe(false);
  expect(isJestEqual('hello', 'world')).toBe(false);
});

it('positive case - equal objects', () => {
  const obj1 = expect.objectContaining({ a: 1 });
  const obj2 = { a: 1, b: 2 };
  expect(isJestEqual(obj1, obj2)).toBe(true);
  expect(isJestEqual(obj2, obj1)).toBe(true);
});

it('negative case - unequal objects', () => {
  const obj1 = expect.objectContaining({ a: 2 });
  const obj2 = { a: 1, b: 3 };
  expect(isJestEqual(obj1, obj2)).toBe(false);
  expect(isJestEqual(obj2, obj1)).toBe(false);
});

it('positive case - asymmetric matcher', () => {
  const asymmetricMatcher = {
    asymmetricMatch: (value: unknown) => value === 42,
  };
  expect(isJestEqual(asymmetricMatcher, 42)).toBe(true);
});

it('negative case - asymmetric matcher', () => {
  const asymmetricMatcher = {
    asymmetricMatch: (value: unknown) => value === 42,
  };
  expect(isJestEqual(asymmetricMatcher, 43)).toBe(false);
});
