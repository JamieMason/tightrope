import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { or } from './or';

it('returns the original Just when Just is provided', () => {
  const someValue = new just(5);
  const result = or(new just(10), someValue);
  expect(result).toEqual(someValue);
});

it('returns the default Maybe when Nothing is provided', () => {
  const result = or(new just(10), nothing);
  expect(result).toEqual(new just(10));
});
