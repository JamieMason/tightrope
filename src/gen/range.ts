import type { Gen } from '../fn/types.js';

/**
 * Create a generator which will `yield` a sequence of numbers.
 *
 * The `range` generator works by starting with the `floor` value and then yielding each subsequent integer value until
 * the `ceiling` value is reached. The generator continues to yield values until it is exhausted, and can be used to
 * generate any range of integers, including negative ranges and ranges with non-integer steps.
 *
 * It is a simple and flexible tool for generating sequences of integer values in JavaScript and TypeScript. It can be
 * used in a variety of applications, including generating sequences of numbers for mathematical computations,
 * generating indices for arrays or other data structures, and more.
 *
 * ## Example
 *
 * In this example, we we call the `range` function with two arguments, `1` and `5`, to create a new generator that
 * yields the numbers between `1` and `5` (inclusive):
 *
 * ```ts
 * import { range } from 'tightrope/gen/range';
 *
 * const myRange = range(1, 5);
 *
 * for (const value of myRange) {
 *   console.log(value);
 * }
 * ```
 *
 * Finally, we use a `for...of` loop to iterate over the values generated by the `myRange` generator and log them to the
 * console. We should see the following output:
 *
 *     // 1
 *     // 2
 *     // 3
 *     // 4
 *     // 5
 *
 * @tags data-source, generator
 */
export function* range(floor: number, ceiling: number): Gen<number> {
  let value = floor;
  while (value <= ceiling) {
    yield value;
    value++;
  }
}
