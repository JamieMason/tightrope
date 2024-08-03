import { expect, test } from 'vitest';
import { isUndefined } from './is-undefined.js';

test.each([
  ['', false],
  [0, false],
  [{}, false],
  [null, false],
  [undefined, true],
])('isUndefined(%s) should be %j', (value, expected) => {
  expect(isUndefined(value)).toEqual(expected);
});
