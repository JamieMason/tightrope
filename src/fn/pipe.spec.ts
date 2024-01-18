import { expect, it } from 'vitest';
import '../../test/matchers';
import { multiply } from '../number/multiply.js';
import { pipe } from './pipe.js';

it('swaps each value in the series for another', () => {
  const result = pipe(2, multiply(2));
  expect(result).toEqual(4);
});
