import { curry } from '../fn/lib/curry.js';

type Chunk = {
  <G extends Iterable<any>>(size: number): (gen: G) => Generator<G[]>;
  <G extends Iterable<any>>(size: number, gen: G): Generator<G[]>;
};

/**
 * ...
 */
export const chunk: Chunk = curry(function* chunk<G extends Iterable<any>>(
  size: number,
  gen: G,
): Generator<G[]> {
  let acc: G[] = [];
  for (const value of gen) {
    acc.push(value);
    if (acc.length === size) {
      yield acc;
      acc = [];
    }
  }
  if (acc.length > 0) {
    yield acc;
  }
}, 2);
