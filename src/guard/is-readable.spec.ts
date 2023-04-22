import { expect, it } from 'vitest';
import { isReadable } from './is-readable';

it('returns true for a readable value', () => {
  expect(isReadable('hello')).toBe(true);
});

it('returns false for a non-readable value', () => {
  expect(isReadable(null)).toBe(false);
});

it('returns true for a readable object property', () => {
  const person: Record<string, string | number> = {
    name: 'John',
    age: 30,
  };
  expect(isReadable(person.name)).toBe(true);
});

it('returns false for a non-readable object property', () => {
  const person: Record<string, string | number> = {
    name: 'John',
    age: 30,
  };
  expect(isReadable(person.job)).toBe(false);
});
