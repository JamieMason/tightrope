import { expect, it } from 'vitest';
import '../../test/matchers';
import { multiply } from '../number/multiply.js';
import { map } from './map.js';
import { range } from './range.js';

it('swaps each value in the series for another', () => {
  const rng = range(1, 3);
  expect(map(multiply(2))(rng)).toProduce([2, 4, 6]);
});
