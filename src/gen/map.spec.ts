import { expect, test } from 'vitest';
import { multiply } from '../number/multiply.js';
import { map } from './map.js';
import { range } from './range.js';

test('swaps each value in the series for another', () => {
  const rng = range(1, 3);
  expect(map(multiply(2))(rng)).toProduce([2, 4, 6]);
});
