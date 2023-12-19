import type { maybe } from './Maybe.gen';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type MapOr = {
  <T, U>(defaultValue: U, mapFn: (value: T) => U, maybe: maybe<T>): U;
  <T, U>(defaultValue: U, mapFn: (value: T) => U): { (maybe: maybe<T>): U };
  <U>(defaultValue: U): {
    <T, U>(mapFn: (value: T) => U): { (maybe: maybe<T>): U };
    <T, U>(mapFn: (value: T) => U, maybe: maybe<T>): U;
  };
};

/**
 * Applies the provided function to the contained value of `Just`, or returns the provided default value if the `Maybe`
 * is `Nothing`.
 *
 * The `mapOr` function takes in a default value, a mapping function, and an `Maybe` object as its arguments. If the
 * input `Maybe` object is a `Just`, it applies the provided mapping function to its contained value and returns the
 * result. If the input `Maybe` object is a `Nothing`, it returns the provided default value.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { curry } from 'tightrope/fn/curry';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { multiply } from 'tightrope/number/multiply';
 * import { mapOr } from 'tightrope/maybe/map-or';
 *
 * pipe(new Just(5), mapOr(0, multiply(2)));
 * // Output: 10
 *
 * pipe(nothing, mapOr(0, multiply(2)));
 * // Output: 0
 * ```
 *
 * ## Use Cases
 *
 * The `mapOr` function is useful when you want to apply a transformation to the value contained in a `Just`, but you
 * also want to provide a default value in case the `Maybe` is a `Nothing`. This can be helpful when working with optional
 * values and you need a fallback value in case the value is not present.
 *
 * Just use cases of `mapOr` include:
 *
 * - Applying a transformation to an optional configuration value, and providing a default value if the configuration
 *   value is not set.
 * - Converting optional values from one type to another, while providing a default value for missing values.
 * - Applying a function to the result of an operation that might not always return a value, and providing a default value
 *   for when the operation fails.
 *
 * @tags maybe, transform, transform-maybe, right-biased, unwrap
 */
export const mapOr: MapOr = curry(
  <T, U>(defaultValue: U, mapFn: (value: T) => U, maybe: maybe<T>): U => {
    return isJust<T>(maybe) ? mapFn(maybe.value) : defaultValue;
  },
  3,
);
