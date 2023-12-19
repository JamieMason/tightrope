import type { maybe } from './Maybe.gen';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type OrElse = {
  <T>(orElseFn: () => maybe<T>): { (maybe: maybe<T>): maybe<T> };
  <T>(orElseFn: () => maybe<T>, maybe: maybe<T>): maybe<T>;
};

/**
 * Transforms `Just(v)` to `Just(v)`, and `Nothing` to a new `Maybe` using the provided function.
 *
 * The `orElse` function takes a function `orElseFn` and an `Maybe` object as its arguments. If the input `Maybe`
 * object is a `Just`, it returns the same `Just` object. If the input `Maybe` object is a `Nothing`, it calls the
 * provided `orElseFn` function and returns the resulting `Maybe`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { orElse } from 'tightrope/maybe/or-else';
 *
 * const defaultOption = () => new Just(42);
 *
 * const option1 = pipe(new Just(5), orElse(defaultOption));
 * // Output: Just(5)
 *
 * const option2 = pipe(nothing, orElse(defaultOption));
 * // Output: Just(42)
 * ```
 *
 * ## Use Cases
 *
 * The `orElse` function is useful when you want to provide a fallback `Maybe` object in case the input `Maybe` is a
 * `Nothing`. It allows you to handle both cases of `Just` and `Nothing` in a more flexible way.
 *
 * Just use cases of `orElse` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   returning a default `Maybe`.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags maybe, transform, transform-maybe, recover, errors, left-biased
 */
export const orElse: OrElse = curry(
  <T>(orElseFn: () => maybe<T>, maybe: maybe<T>): maybe<T> => {
    return isJust(maybe) ? maybe : orElseFn();
  },
  2,
);
