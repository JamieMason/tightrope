import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { or } from './or.js';
import { Err, Ok, type Result } from './result.js';

test.each<
  [Result<number, Error>, Result<number, Error>, Result<number, Error>]
>([
  [Ok.create(2), Err.create(new Error('wat?')), Ok.create(2)],
  [Err.create(new Error('wat?')), Ok.create(2), Ok.create(2)],
  [
    Err.create(new Error('wat?')),
    Err.create(new Error('wut?')),
    Err.create(new Error('wut?')),
  ],
  [Ok.create(2), Ok.create(4), Ok.create(2)],
])('%j || %j == %j', (a, b, expected) => {
  expect<Result<number, Error>>(pipe(a, or(b))).toEqual(expected);
});
