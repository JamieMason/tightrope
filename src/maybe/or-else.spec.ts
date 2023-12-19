import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { orElse } from './or-else';

it('orElse should return the original Just when Just is provided', () => {
  const someValue = new just(5);
  const result = orElse(() => new just(10), someValue);
  expect(result).toEqual(someValue);
});

it('orElse should return a new Maybe created by the provided function when Nothing is provided', () => {
  const result = orElse(() => new just(10), nothing);
  expect(result).toEqual(new just(10));
});
