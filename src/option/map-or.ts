import type { Option } from './index.js';
import { curry } from '../fn/curry.js';
import { isSome } from './is-some.js';

export type MapOr = {
  <T, U>(defaultValue: U, mapFn: (value: T) => U, option: Option<T>): U;
  <T, U>(defaultValue: U, mapFn: (value: T) => U): { (option: Option<T>): U };
  <U>(defaultValue: U): {
    <T, U>(mapFn: (value: T) => U): { (option: Option<T>): U };
    <T, U>(mapFn: (value: T) => U, option: Option<T>): U;
  };
};

/**
 * Applies the provided function to the contained value of `Some`, or returns the provided default value if the `Option`
 * is `None`.
 *
 * The `mapOr` function takes in a default value, a mapping function, and an `Option` object as its arguments. If the
 * input `Option` object is a `Some`, it applies the provided mapping function to its contained value and returns the
 * result. If the input `Option` object is a `None`, it returns the provided default value.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { curry } from 'tightrope/fn/curry';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { multiply } from 'tightrope/number/multiply';
 * import { mapOr } from 'tightrope/option/map-or';
 *
 * pipe(new Some(5), mapOr(0, multiply(2)));
 * // Output: 10
 *
 * pipe(none, mapOr(0, multiply(2)));
 * // Output: 0
 * ```
 *
 * ## Use Cases
 *
 * The `mapOr` function is useful when you want to apply a transformation to the value contained in a `Some`, but you
 * also want to provide a default value in case the `Option` is a `None`. This can be helpful when working with optional
 * values and you need a fallback value in case the value is not present.
 *
 * Some use cases of `mapOr` include:
 *
 * - Applying a transformation to an optional configuration value, and providing a default value if the configuration
 *   value is not set.
 * - Converting optional values from one type to another, while providing a default value for missing values.
 * - Applying a function to the result of an operation that might not always return a value, and providing a default value
 *   for when the operation fails.
 *
 * @tags option, transform, transform-option, right-biased, unwrap
 */
export const mapOr: MapOr = curry(
  <T, U>(defaultValue: U, mapFn: (value: T) => U, option: Option<T>): U => {
    return isSome<T>(option) ? mapFn(option.value) : defaultValue;
  },
  3,
);
