import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type Map = {
  <T, U>(mapFn: (value: T) => U): { (maybe: maybe<T>): maybe<U> };
  <T, U>(mapFn: (value: T) => U, maybe: maybe<T>): maybe<U>;
};

/**
 * Transforms `Maybe<T>` to `Maybe<U>` by applying the provided function to the contained value of `Just` and leaving
 * `Nothing` values unchanged.
 *
 * The `map` function takes a mapping function and an `Maybe` object as its arguments. If the input `Maybe` object is
 * a `Just`, it applies the provided mapping function to its contained value and wraps the result in a new `Just`. If
 * the input `Maybe` object is a `Nothing`, it returns the `Nothing` unchanged.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { map } from 'tightrope/maybe/map';
 * import { multiply } from 'tightrope/number/multiply';
 *
 * const result1 = pipe(new Just(5), map(multiply(2)));
 * // Output: Just(10)
 *
 * const result2 = pipe(nothing, map(multiply(2)));
 * // Output: Nothing
 * ```
 *
 * ## Use Cases
 *
 * The `map` function is useful when you want to apply a transformation to the value contained in a `Just` without
 * affecting `Nothing` values. This can be helpful when working with optional values and applying transformations that
 * should only be applied when the value is present.
 *
 * Just use cases of `map` include:
 *
 * - Applying a transformation to an optional configuration value without affecting the absence of the value.
 * - Converting optional values from one type to another, while keeping the missing values as `Nothing`.
 * - Applying a function to the result of an operation that might not always return a value, and keeping the failure as a
 *   `Nothing`.
 *
 * @tags maybe, transform, transform-value, right-biased
 */
export const map: Map = curry(
  <T, U>(mapFn: (value: T) => U, maybe: maybe<T>): maybe<U> => {
    return isJust<T>(maybe) ? new just(mapFn(maybe.value)) : nothing;
  },
  2,
);
