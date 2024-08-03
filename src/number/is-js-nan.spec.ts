import { expect, test } from 'vitest';
import { isJsNaN } from './is-js-nan.js';

test.each([
  [Number.NaN, true],
  [{}, false],
  [null, false],
  [undefined, false],
  [10, false],
  ['1', false],
])('isJsNaN(%s) should be %j', (value, expected) => {
  expect(isJsNaN(value)).toEqual(expected);
});
