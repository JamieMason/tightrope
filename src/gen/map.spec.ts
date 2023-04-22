import { expect, it } from 'vitest';
import '../../test/matchers';
import { multiply } from '../number/multiply';
import { map } from './map';
import { range } from './range';

it('swaps each value in the series for another', () => {
  const rng = range(1, 3);
  expect(map(multiply(2))(rng)).toProduce([2, 4, 6]);
});
