import { curry } from '../fn/lib/curry.js';

type Is = {
  <T>(b: T): (a: unknown) => a is T;
  <T>(b: T, a: unknown): a is T;
};

/**
 * Returns whether both values are referentially equal, ie. `a === b`. This will be the case when both values are
 * primitives (undefined, number, null, string, or boolean) or they are objects which both point to the same address in
 * memory.
 *
 * @tags guard, comparator
 */
export const is: Is = curry(<T>(b: T, a: unknown): a is T => b === a, 2);
