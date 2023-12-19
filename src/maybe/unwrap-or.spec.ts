import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { unwrapOr } from './unwrap-or';

it('unwrapOr should return the value when Just is provided', () => {
  const someValue = new just(5);
  const result = unwrapOr(10, someValue);
  expect(result).toEqual(5);
});

it('unwrapOr should return the default value when Nothing is provided', () => {
  const result = unwrapOr(10, nothing);
  expect(result).toEqual(10);
});
