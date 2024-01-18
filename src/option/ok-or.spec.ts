import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { Err, Ok } from '../result/index.js';
import { okOr } from './ok-or.js';

it('returns Ok with the value of Some when Some is provided', () => {
  const someValue = new Some(5);
  const result = okOr('error', someValue);
  expect(result).toEqual(new Ok(5));
});

it('returns Err with the provided default error value when None is provided', () => {
  const result = okOr('error', none);
  expect(result).toEqual(new Err('error'));
});
