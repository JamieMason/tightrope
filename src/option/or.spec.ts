import { expect, it } from 'vitest';
import { Some, none } from './index.js';
import { or } from './or.js';

it('returns the original Some when Some is provided', () => {
  const someValue = new Some(5);
  const result = or(new Some(10), someValue);
  expect(result).toEqual(someValue);
});

it('returns the default Option when None is provided', () => {
  const result = or(new Some(10), none);
  expect(result).toEqual(new Some(10));
});
