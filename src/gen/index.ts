export { chunk } from './chunk.js';
export { filter } from './filter.js';
export { map } from './map.js';
export { range } from './range.js';
export { reduceEach } from './reduce-each.js';
export { reduce } from './reduce.js';
export { skip } from './skip.js';
export { split } from './split.js';
export { takeLast } from './take-last.js';
export { take } from './take.js';

export namespace Gen {
  export type Any = Generator<any, any, any>;

  /** A Generator only yielding values of type `T` */
  export type Of<T> = Generator<T, void, unknown>;

  /** An async Generator only yielding values of type `T` */
  export type OfAsync<T> = AsyncGenerator<T, void, unknown>;

  /** Get the type which a Generator yields */
  export type YieldType<T> = T extends Generator<infer X>
    ? X
    : T extends AsyncGenerator<infer X>
      ? X
      : never;

  export type Reducer<G extends Gen.Any> = (
    acc: any,
    value: Gen.YieldType<G>,
  ) => any;
}

export namespace Iter {
  export type Any = Iterable<any>;

  export type ValueType<T> = T extends Iterable<infer X> ? X : never;

  export type Reducer<T extends Iter.Any> = (
    acc: any,
    value: Iter.ValueType<T>,
  ) => any;
}
