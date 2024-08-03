import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { multiply } from '../number/multiply.js';
import { map } from './map.js';
import { range } from './range.js';
import { skip } from './skip.js';

test('short-circuits the first n values in a series', () => {
  const $double = vi.fn(multiply(1));
  expect(pipe(range(1, 4), skip(2), map($double))).toProduce([3, 4]);
  expect($double).toHaveBeenCalledTimes(2);
});
