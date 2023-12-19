import type { maybe } from './Maybe.gen';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type Or = {
  <T>(defaultOption: maybe<T>): {
    (maybe: maybe<T>): maybe<T>;
  };
  <T>(defaultOption: maybe<T>, maybe: maybe<T>): maybe<T>;
};

/**
 * Transforms `Just(v)` to `Just(v)`, and `Nothing` to the provided default `Maybe`.
 *
 * The `or` function takes a default `Maybe` object and an input `Maybe` object as its arguments. If the input
 * `Maybe` object is a `Just`, it returns the same `Just` object. If the input `Maybe` object is a `Nothing`, it returns
 * the provided default `Maybe` object.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { or } from 'tightrope/maybe/or';
 *
 * const defaultOption = new Just(42);
 *
 * pipe(new Just(5), or(defaultOption));
 * // Output: Just(5)
 *
 * pipe(nothing, or(defaultOption));
 * // Output: Just(42)
 * ```
 *
 * ## Use Cases
 *
 * The `or` function is useful when you want to provide a fallback `Maybe` object in case the input `Maybe` is a
 * `Nothing`. It allows you to handle both cases of `Just` and `Nothing` in a more flexible way.
 *
 * Just use cases of `or` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   returning a default `Maybe`.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags maybe, transform, transform-maybe, recover, errors, left-biased
 */
export const or: Or = curry(
  <T>(defaultOption: maybe<T>, maybe: maybe<T>): maybe<T> => {
    return isJust(maybe) ? maybe : defaultOption;
  },
  2,
);
