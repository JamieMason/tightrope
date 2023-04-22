import { expect, it } from 'vitest';
import { none, Some } from '.';
import { Err, Ok } from '../result';
import { okOrElse } from './ok-or-else';

it('okOrElse should return Ok with the value of Some when Some is provided', () => {
  const someValue = new Some(5);
  const result = okOrElse(() => 'error', someValue);
  expect(result).toEqual(new Ok(5));
});

it('okOrElse should return Err with the result of the provided function when None is provided', () => {
  const result = okOrElse(() => 'error', none);
  expect(result).toEqual(new Err('error'));
});
