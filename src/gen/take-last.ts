import type { Iter } from './index.js';

/**
 * Consume a generator and `yield` only the final result.
 *
 * @tags generator
 */
export function* takeLast<T extends Iterable<any>>(
  gen: T,
): Iterable<Iter.ValueType<T>> {
  let didYield = false;
  let last: Iter.ValueType<T> | null = null;
  for (const value of gen) {
    didYield = true;
    last = value;
  }
  if (didYield) {
    yield last as Iter.ValueType<T>;
  }
}
