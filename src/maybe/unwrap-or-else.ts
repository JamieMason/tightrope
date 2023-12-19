import type { Maybe } from '.';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type UnwrapOrElse = {
  <T>(orElseFn: () => T): { (maybe: Maybe<T>): T };
  <T>(orElseFn: () => T, maybe: Maybe<T>): T;
};

/**
 * Transforms `Just(v)` to `v`, and `Nothing` to a value computed by the provided function.
 *
 * The `unwrapOrElse` function takes a function that computes a default value and an input `Maybe` object as its
 * arguments. If the input `Maybe` object is a `Just`, it returns the inner value. If the input `Maybe` object is a
 * `Nothing`, it returns the value computed by the provided function.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { unwrapOrElse } from 'tightrope/maybe/unwrap-or-else';
 *
 * const defaultValueFn = () => 42;
 *
 * pipe(new Just(5), unwrapOrElse(defaultValueFn));
 * // Output: 5
 *
 * pipe(nothing, unwrapOrElse(defaultValueFn));
 * // Output: 42
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOrElse` function is useful when you want to extract the inner value of an `Maybe` object and compute a
 * default value using a provided function in case the `Maybe` is a `Nothing`. It allows you to handle both cases of
 * `Just` and `Nothing` in a flexible way, especially when the default value computation is complex or depends on external
 * factors.
 *
 * Just use cases of `unwrapOrElse` include:
 *
 * - Providing a computed default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   computing a default value using a function.
 * - Handling errors in a way that gracefully falls back to a computed default value, such as when making API calls and
 *   the server returns an error response.
 *
 * @tags maybe, unwrap, transform, transform-maybe, errors, left-biased
 */
export const unwrapOrElse: UnwrapOrElse = curry(
  <T>(orElseFn: () => T, maybe: Maybe<T>): T => {
    return isJust<T>(maybe) ? maybe.value : orElseFn();
  },
  2,
);
