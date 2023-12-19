import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { Err, Ok } from '../result';
import { okOr } from './ok-or';

it('returns Ok with the value of Just when Just is provided', () => {
  const someValue = new just(5);
  const result = okOr('error', someValue);
  expect(result).toEqual(new Ok(5));
});

it('returns Err with the provided default error value when Nothing is provided', () => {
  const result = okOr('error', nothing);
  expect(result).toEqual(new Err('error'));
});
