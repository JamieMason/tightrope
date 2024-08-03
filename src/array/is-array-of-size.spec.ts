import { expect, test } from 'vitest';
import { isArrayOfSize } from './is-array-of-size.js';

test('returns true when value is array of the given length', () => {
  expect(isArrayOfSize(2, [1, 2])).toEqual(true);
  expect(isArrayOfSize(0, [1, 2])).toEqual(false);
  expect(isArrayOfSize(0, [])).toEqual(true);
});
