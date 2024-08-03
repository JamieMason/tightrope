import { expect, test } from 'vitest';
import { Err, Ok } from '../result/result.js';
import { okOrElse } from './ok-or-else.js';
import { Some, none } from './option.js';

test('okOrElse should return Ok with the value of Some when Some is provided', () => {
  const someValue = Some.create(5);
  const result = okOrElse(() => 'error', someValue);
  expect(result).toEqual(new Ok(5));
});

test('okOrElse should return Err with the result of the provided function when None is provided', () => {
  const result = okOrElse(() => 'error', none);
  expect(result).toEqual(new Err('error'));
});
