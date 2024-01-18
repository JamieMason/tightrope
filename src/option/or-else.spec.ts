import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { orElse } from './or-else.js';

it('orElse should return the original Some when Some is provided', () => {
  const someValue = new Some(5);
  const result = orElse(() => new Some(10), someValue);
  expect(result).toEqual(someValue);
});

it('orElse should return a new Option created by the provided function when None is provided', () => {
  const result = orElse(() => new Some(10), none);
  expect(result).toEqual(new Some(10));
});
