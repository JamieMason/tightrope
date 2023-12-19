import { expect, it } from 'vitest';
import { nothing, Just } from '.';
import { or } from './or';

it('returns the original Just when Just is provided', () => {
  const someValue = new Just(5);
  const result = or(new Just(10), someValue);
  expect(result).toEqual(someValue);
});

it('returns the default Maybe when Nothing is provided', () => {
  const result = or(new Just(10), nothing);
  expect(result).toEqual(new Just(10));
});
