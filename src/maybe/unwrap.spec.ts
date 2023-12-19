import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { unwrap } from './unwrap';

it('unwrap should return the value when Just is provided', () => {
  const someValue = new just(5);
  const result = unwrap(someValue);
  expect(result).toEqual(5);
});

it('unwrap should throw an error when Nothing is provided', () => {
  expect(() => unwrap(nothing)).toThrow(
    'Called `Maybe.unwrap()` on a `Nothing` value',
  );
});
