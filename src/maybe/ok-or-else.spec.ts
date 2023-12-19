import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { Err, Ok } from '../result';
import { okOrElse } from './ok-or-else';

it('okOrElse should return Ok with the value of Just when Just is provided', () => {
  const someValue = new just(5);
  const result = okOrElse(() => 'error', someValue);
  expect(result).toEqual(new Ok(5));
});

it('okOrElse should return Err with the result of the provided function when Nothing is provided', () => {
  const result = okOrElse(() => 'error', nothing);
  expect(result).toEqual(new Err('error'));
});
