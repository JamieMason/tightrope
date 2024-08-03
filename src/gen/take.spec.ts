import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { multiply } from '../number/multiply.js';
import { map } from './map.js';
import { range } from './range.js';
import { take } from './take.js';

test('takes the first n elements of a generator and short-circuits', () => {
  const $double = vi.fn(multiply(2));
  expect(pipe(range(0, 100), take(3), x => x, map($double))).toProduce([
    0, 2, 4,
  ]);
  expect($double).toHaveBeenCalledTimes(3);
});

test('takes the first n elements of a non-numeric generator', () => {
  const $toUpper = vi.fn((str: string) => str.toUpperCase());
  const letters = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
  };

  expect(pipe(letters(), take(2), map($toUpper))).toProduce(['A', 'B']);
  expect($toUpper).toHaveBeenCalledTimes(2);
});

test('completes if generator yields less than it plans to take', () => {
  const $double = vi.fn(multiply(2));
  expect(pipe(range(0, 1), take(5), map($double))).toProduce([0, 2]);
  expect($double).toHaveBeenCalledTimes(2);
});
