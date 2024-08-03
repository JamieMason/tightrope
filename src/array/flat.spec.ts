import { expect, test } from 'vitest';
import { flat } from './flat.js';

test('invokes .flat() on the given array', () => {
  const getValue = () => [1, [2, 3], [4, [5, 6]]];
  const expected = [1, 2, 3, 4, [5, 6]];
  expect(getValue().flat()).toEqual(expected);
  expect(flat(getValue())).toEqual(expected);
});
