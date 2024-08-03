import { expect, test } from 'vitest';
import { isGreaterThan } from '../number/is-greater-than.js';
import { isString } from '../string/is-string.js';
import { every } from './every.js';

test('returns true if every element in the array passes the predicate', () => {
  expect.assertions(1);
  const value: unknown = ['foo', 'bar', 'baz'];
  if (every(isString, value)) {
    expect<string[]>(value).toBe(value);
  }
});

test('returns true when every value passes the guard', () => {
  expect(every(isGreaterThan(2), [5, 3, 6])).toEqual(true);
  expect(every(isGreaterThan(2), [0, 1, 5])).toEqual(false);
  expect(every(isGreaterThan(2), [3, 1, 7])).toEqual(false);
  expect(every(isGreaterThan(2), [1, 3, 3])).toEqual(false);
});

test('returns false if at least one element in the array fails the predicate', () => {
  expect.assertions(1);
  const value = ['foo', 'bar', 42];
  if (every(isString, value) === false) {
    expect<(string | number)[]>(value).toBe(value);
  }
});

test('returns false for an empty array', () => {
  expect(every(isString, [])).toBe(false);
});

test('returns false for non-array input', () => {
  expect(every(isString, 'test')).toBe(false);
});
