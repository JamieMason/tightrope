import { expect, it } from 'vitest';
import { none, Some } from '.';
import { or } from './or';

it('returns the original Some when Some is provided', () => {
  const someValue = new Some(5);
  const result = or(new Some(10), someValue);
  expect(result).toEqual(someValue);
});

it('returns the default Option when None is provided', () => {
  const result = or(new Some(10), none);
  expect(result).toEqual(new Some(10));
});
