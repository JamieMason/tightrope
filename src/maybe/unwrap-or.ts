import type { Maybe } from '.';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type UnwrapOr = {
  <T>(defaultValue: T): { (maybe: Maybe<T>): T };
  <T>(defaultValue: T, maybe: Maybe<T>): T;
};

/**
 * Transforms `Just(v)` to `v`, and `Nothing` to a provided default value.
 *
 * The `unwrapOr` function takes a default value and an input `Maybe` object as its arguments. If the input `Maybe`
 * object is a `Just`, it returns the inner value. If the input `Maybe` object is a `Nothing`, it returns the provided
 * default value.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { unwrapOr } from 'tightrope/maybe/unwrap-or';
 *
 * pipe(new Just(5), unwrapOr(42));
 * // Output: 5
 *
 * pipe(nothing, unwrapOr(42));
 * // Output: 42
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOr` function is useful when you want to extract the inner value of an `Maybe` object and provide a
 * default value in case the `Maybe` is a `Nothing`. It allows you to handle both cases of `Just` and `Nothing` in a
 * straightforward manner.
 *
 * Just use cases of `unwrapOr` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   return a default value.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags maybe, unwrap, transform, transform-maybe, recover, errors, left-biased
 */
export const unwrapOr: UnwrapOr = curry(
  <T>(defaultValue: T, maybe: Maybe<T>): T => {
    return isJust<T>(maybe) ? maybe.value : defaultValue;
  },
  2,
);
