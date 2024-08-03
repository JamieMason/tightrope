import { expect, test } from 'vitest';
import { None, Some } from './option.js';
import { or } from './or.js';

test('returns the original Some when Some is provided', () => {
  const someValue = Some.create(5);
  const result = or(Some.create(10), someValue);
  expect(result).toEqual(someValue);
});

test('returns the default Option when None is provided', () => {
  const value = None.create<number>();
  const result = or(Some.create(10), value);
  expect(result).toEqual(Some.create(10));
});
