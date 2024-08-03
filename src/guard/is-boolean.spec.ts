import { expect, test } from 'vitest';
import { isBoolean } from './is-boolean.js';

test.each([
  [true, true],
  [new Boolean(true), true],
  [false, true],
  [new Boolean(false), true],
  [Boolean, false],
  [0, false],
  ['', false],
  [null, false],
  [undefined, false],
])('isBoolean(%s) should be %j', (value, expected) => {
  expect(isBoolean(value)).toEqual(expected);
});
