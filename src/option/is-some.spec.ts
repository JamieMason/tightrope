import { expect, it } from 'vitest';
import { none, Some } from '.';
import { isSome } from './is-some';

it('isSome should return true when Some is provided', () => {
  const someValue = new Some(5);
  const result = isSome(someValue);
  expect(result).toBe(true);
});

it('isSome should return false when None is provided', () => {
  const result = isSome(none);
  expect(result).toBe(false);
});
