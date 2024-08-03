import { expect, test } from 'vitest';
import { isFalsy } from './is-falsy.js';

test.each([
  ['0', false],
  ['false', false],
  ['null', false],
  ['undefined', false],
  [{}, false],
  [false, true],
  [0, true],
  [Number.NaN, true],
  ['', true],
  [null, true],
  [undefined, true],
])('isFalsy(%s) should be %j', (value, expected) => {
  expect(isFalsy(value)).toEqual(expected);
});
