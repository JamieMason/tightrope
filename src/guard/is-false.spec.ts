import { expect, test } from 'vitest';
import { isFalse } from './is-false.js';

test.each([
  [true, false],
  [new Boolean(true), false],
  [false, true],
  [new Boolean(false), true],
  [Boolean, false],
  [0, false],
  ['', false],
  [null, false],
  [undefined, false],
])('isBoolean(%s) should be %j', (value, expected) => {
  expect(isFalse(value)).toEqual(expected);
});
