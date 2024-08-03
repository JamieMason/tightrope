import { curry } from '../fn/lib/curry.js';
import type { Guard } from '../guard/index.js';

type Filter = {
  <G extends Iterable<any>, Fn extends Guard.Unary>(
    guard: Fn,
  ): (gen: G) => Iterable<Guard.UnaryType<Fn>>;
  <G extends Iterable<any>, Fn extends Guard.Unary>(
    guard: Fn,
    gen: G,
  ): Iterable<Guard.UnaryType<Fn>>;
};

/**
 * Only `yield` each value which passes the predicate.
 *
 * @tags generator
 */
export const filter: Filter = curry(function* filter<
  G extends Iterable<any>,
  Fn extends Guard.Unary,
>(guard: Fn, gen: G): Iterable<Guard.UnaryType<Fn>> {
  for (const value of gen) {
    if (guard(value)) {
      yield value;
    }
  }
}, 2);
