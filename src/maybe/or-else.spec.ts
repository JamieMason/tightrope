import { expect, it } from 'vitest';
import { nothing, Just } from '.';
import { orElse } from './or-else';

it('orElse should return the original Just when Just is provided', () => {
  const someValue = new Just(5);
  const result = orElse(() => new Just(10), someValue);
  expect(result).toEqual(someValue);
});

it('orElse should return a new Maybe created by the provided function when Nothing is provided', () => {
  const result = orElse(() => new Just(10), nothing);
  expect(result).toEqual(new Just(10));
});
