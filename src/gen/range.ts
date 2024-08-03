import { curry } from '../fn/lib/curry.js';
import type { Gen } from './index.js';

type Range = {
  (floor: number): (ceiling: number) => Gen.Of<number>;
  (floor: number, ceiling: number): Gen.Of<number>;
};

/**
 * Create a generator which will `yield` a sequence of numbers.
 *
 * The `range` generator works by starting with the `floor` value and then yielding each subsequent integer value until
 * the `ceiling` value is reached. The generator continues to yield values until it is exhausted, and can be used to
 * generate any range of integers, including negative ranges and ranges with non-integer steps.
 *
 * @tags data-source, generator
 */
export const range: Range = curry(function* range(
  floor: number,
  ceiling: number,
): Gen.Of<number> {
  let value = floor;
  while (value <= ceiling) {
    yield value;
    value++;
  }
}, 2);
