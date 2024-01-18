import { expect, it } from 'vitest';
import { isNone } from '../option/is-none.js';
import { isSome } from '../option/is-some.js';
import { unwrap } from '../option/unwrap.js';
import { Err, Ok } from '../result/index.js';
import { ok } from './ok.js';

it('transforms an Ok to a Some', () => {
  const result = new Ok(42);
  const option = ok(result);
  expect(isSome(option)).toBe(true);
  expect(unwrap(option)).toBe(42);
});

it('transforms an Err to a None', () => {
  const result = new Err('error message');
  const option = ok(result);
  expect(isNone(option)).toBe(true);
});
