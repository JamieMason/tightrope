import { expect, test } from 'vitest';
import { isNil } from './is-nil.js';

test.each([
  ['', false],
  [0, false],
  [false, false],
  [-1, false],
  [1, false],
  [true, false],
  [null, true],
  [undefined, true],
])('isNil(%s) should be %j', (value, expected) => {
  expect(isNil(value)).toEqual(expected);
});
