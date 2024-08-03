import { expect, test } from 'vitest';
import { isTruthy } from './is-truthy.js';

test.each([
  ['0', true],
  ['false', true],
  ['null', true],
  ['undefined', true],
  [{}, true],
  [false, false],
  [0, false],
  [Number.NaN, false],
  ['', false],
  [null, false],
  [undefined, false],
])('isTruthy(%s) should be %j', (value, expected) => {
  expect(isTruthy(value)).toEqual(expected);
});
