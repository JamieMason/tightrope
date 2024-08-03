import { expect, test } from 'vitest';
import { is } from './is.js';

const reference = {};

test.each([
  [reference, reference, true],
  ['same', 'same', true],
  ['same', 'diff', false],
  [1, 1, true],
  [0, 0, true],
  [0, 1, false],
  [null, undefined, false],
])('is(%s) should be %j', (a, b, expected) => {
  expect(is(a, b)).toEqual(expected);
});
