import { expect, test } from 'vitest';
import { Err, Ok } from '../result/result.js';
import { okOr } from './ok-or.js';
import { Some, none } from './option.js';

test('returns Ok with the value of Some when Some is provided', () => {
  const someValue = Some.create(5);
  const result = okOr('error', someValue);
  expect(result).toEqual(new Ok(5));
});

test('returns Err with the provided default error value when None is provided', () => {
  const result = okOr('error', none);
  expect(result).toEqual(new Err('error'));
});
