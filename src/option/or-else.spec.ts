import { expect, test } from 'vitest';
import { Some, none } from './option.js';
import { orElse } from './or-else.js';

test('orElse should return the original Some when Some is provided', () => {
  const someValue = Some.create(5);
  const result = orElse(() => Some.create(10), someValue);
  expect(result).toEqual(someValue);
});

test('orElse should return a new Option created by the provided function when None is provided', () => {
  const result = orElse(() => Some.create(10), none);
  expect(result).toEqual(Some.create(10));
});
