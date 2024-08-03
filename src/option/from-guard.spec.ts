import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { isNumber } from '../guard/is-number.js';
import { fromGuard } from './from-guard.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';

it('returns Some if the value passes the guard', () => {
  const someNumber = fromGuard(isNumber, 42);
  expect<Option<number>>(someNumber).toEqual(new Some(42));
});

it('returns None if the value fails the guard', () => {
  const notNumber = pipe('not a number', fromGuard(isNumber));
  expect<Option<number>>(notNumber).toEqual(none);
});
