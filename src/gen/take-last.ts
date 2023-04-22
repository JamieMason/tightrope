import type { Gen, GenYield } from '../fn/types';

/**
 * Consume a generator and `yield` only the final result.
 *
 * @tags generator
 */
export function* takeLast<T extends Gen<any>>(gen: T): Gen<GenYield<T>> {
  let didYield = false;
  let last: GenYield<T> | null = null;
  for (const value of gen) {
    didYield = true;
    last = value;
  }
  if (didYield) {
    yield last as GenYield<T>;
  }
}
