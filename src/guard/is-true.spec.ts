import { expect, test } from 'vitest';
import { isTrue } from './is-true.js';

test.each([
  [true, true],
  [new Boolean(true), true],
  [false, false],
  [new Boolean(false), false],
  [Boolean, false],
  [0, false],
  ['', false],
  [null, false],
  [undefined, false],
])('isBoolean(%s) should be %j', (value, expected) => {
  expect(isTrue(value)).toEqual(expected);
});
