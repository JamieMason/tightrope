import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { isNumber } from '../number/is-number.js';
import { fromGuard } from './from-guard.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

test('returns Some if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect<Option<number>>(someNumber).toEqual(Some.create(42));
});

test('returns None if the value fails the guard', () => {
  const notNumber = pipe('not a number', fromGuard(isNumber));
  expect<Option<number>>(notNumber).toEqual(none);
});
