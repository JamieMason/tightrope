import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { multiply } from '../number/multiply.js';
import { map } from './map.js';
import { range } from './range.js';
import { takeLast } from './take-last.js';

test('yields only the last value from a generator', () => {
  const $double = vi.fn(multiply(2));
  expect(pipe(range(0, 10), takeLast, map($double))).toProduce([20]);
  expect($double).toHaveBeenCalledTimes(1);
});

test('does not yield if given a generator which does not yield', () => {
  const never = function* () {
    /*.*/
  };
  const $double = vi.fn(multiply(2));
  expect(pipe(never(), takeLast, map($double))).toProduce([]);
  expect($double).toHaveBeenCalledTimes(0);
});
