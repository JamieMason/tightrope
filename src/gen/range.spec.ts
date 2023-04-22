import { expect, it } from 'vitest';
import '../../test/matchers';
import { range } from './range';

it('lazily produces a series of numbers in the given range', () => {
  const rng = range(0, 5);
  expect(rng).toProduce([0, 1, 2, 3, 4, 5]);
});
