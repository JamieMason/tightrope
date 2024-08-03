import { expect, test } from 'vitest';
import { isNone } from '../option/is-none.js';
import { isSome } from '../option/is-some.js';
import { unwrap } from '../option/unwrap.js';
import { ok } from './ok.js';
import { Err, Ok } from './result.js';

test('transforms an Ok to a Some', () => {
  const result = new Ok(42);
  const option = ok(result);
  expect(isSome(option)).toBe(true);
  expect(unwrap(option)).toBe(42);
});

test('transforms an Err to a None', () => {
  const result = new Err('error message');
  const option = ok(result);
  expect(isNone(option)).toBe(true);
});
