import { curry } from '../fn/curry.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';
import { isSome } from './is-some.js';

export type Map = {
  <T, U>(mapFn: (value: T) => U): (option: Option<T>) => Option<U>;
  <T, U>(mapFn: (value: T) => U, option: Option<T>): Option<U>;
};

/**
 * Transforms `Option<T>` to `Option<U>` by applying the provided function to the contained value of `Some` and leaving
 * `None` values unchanged.
 *
 * The `map` function takes a mapping function and an `Option` object as its arguments. If the input `Option` object is
 * a `Some`, it applies the provided mapping function to its contained value and wraps the result in a new `Some`. If
 * the input `Option` object is a `None`, it returns the `None` unchanged.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { map } from 'tightrope/option/map';
 * import { multiply } from 'tightrope/number/multiply';
 *
 * const result1 = pipe(new Some(5), map(multiply(2)));
 * // Output: Some(10)
 *
 * const result2 = pipe(none, map(multiply(2)));
 * // Output: None
 * ```
 *
 * ## Use Cases
 *
 * The `map` function is useful when you want to apply a transformation to the value contained in a `Some` without
 * affecting `None` values. This can be helpful when working with optional values and applying transformations that
 * should only be applied when the value is present.
 *
 * Some use cases of `map` include:
 *
 * - Applying a transformation to an optional configuration value without affecting the absence of the value.
 * - Converting optional values from one type to another, while keeping the missing values as `None`.
 * - Applying a function to the result of an operation that might not always return a value, and keeping the failure as a
 *   `None`.
 *
 * @tags option, transform, transform-value, right-biased
 */
export const map: Map = curry(
  <T, U>(mapFn: (value: T) => U, option: Option<T>): Option<U> => {
    return isSome<T>(option) ? new Some(mapFn(option.value)) : none;
  },
  2,
);
