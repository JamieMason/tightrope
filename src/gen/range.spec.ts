import { expect, test } from 'vitest';
import { range } from './range.js';

test('lazily produces a series of numbers in the given range', () => {
  const rng = range(0, 5);
  expect(rng).toProduce([0, 1, 2, 3, 4, 5]);
});
