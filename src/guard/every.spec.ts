import { expect, it } from 'vitest';
import { every } from './every';
import { isString } from './is-string';

it('returns true if every element in the array passes the predicate', () => {
  expect.assertions(1);
  const value: unknown = ['foo', 'bar', 'baz'];
  if (every(isString, value)) {
    expect<string[]>(value).toBe(value);
  }
});

it('returns false if at least one element in the array is not a string', () => {
  expect.assertions(1);
  const value = ['foo', 'bar', 42];
  if (every(isString, value) === false) {
    expect<(string | number)[]>(value).toBe(value);
  }
});

it('returns false for an empty array', () => {
  expect(every(isString, [])).toBe(false);
});

it('returns false for non-array input', () => {
  expect(every(isString, 'test')).toBe(false);
});
