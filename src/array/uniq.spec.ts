import { expect, test } from 'vitest';
import { uniq } from './uniq.js';

const reference = {};

test.each([
  [
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [[reference, reference], [reference]],
  [
    [reference, reference, {}],
    [reference, {}],
  ],
])('uniq(%s) should be %j', (value, expected) => {
  expect(uniq(value)).toEqual(expected);
});
