import { curry } from '../fn/lib/curry.js';
import type { Iter } from './index.js';

type Map = {
  <G extends Iterable<any>, Fn extends (input: Iter.ValueType<G>) => any>(
    fn: Fn,
  ): (gen: G) => Iterable<ReturnType<Fn>>;
  <G extends Iterable<any>, Fn extends (input: Iter.ValueType<G>) => any>(
    fn: Fn,
    gen: G,
  ): Iterable<ReturnType<Fn>>;
};

/**
 * Transform and `yield` each value produced by a generator.
 *
 * @tags transform, generator
 */
export const map: Map = curry(function* map<
  G extends Iterable<any>,
  Fn extends (input: Iter.ValueType<G>) => any,
>(fn: Fn, gen: G): Iterable<ReturnType<Fn>> {
  for (const value of gen) {
    yield fn(value);
  }
}, 2);
