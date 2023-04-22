import { expect, it, vi } from 'vitest';
import '../../test/matchers';
import { pipe } from '../fn/pipe';
import { multiply } from '../number/multiply';
import { map } from './map';
import { range } from './range';
import { skip } from './skip';

it('short-circuits the first n values in a series', () => {
  const $double = vi.fn(multiply(1));
  expect(pipe(range(1, 4), skip(2), map($double))).toProduce([3, 4]);
  expect($double).toHaveBeenCalledTimes(2);
});
