import { expect, test } from 'vitest';
import { isReadable } from './is-readable.js';

test('returns true for a readable value', () => {
  expect(isReadable('hello')).toBe(true);
});

test('returns false for a non-readable value', () => {
  expect(isReadable(null)).toBe(false);
});

test('returns true for a readable object property', () => {
  const person: Record<string, string | number> = {
    name: 'John',
    age: 30,
  };
  expect(isReadable(person.name)).toBe(true);
});

test('returns false for a non-readable object property', () => {
  const person: Record<string, string | number> = {
    name: 'John',
    age: 30,
  };
  expect(isReadable(person.job)).toBe(false);
});
