import type { maybe } from './Maybe.gen';
import { curry } from '../fn/curry';
import type { Result } from '../result';
import { Err, Ok } from '../result';
import { isJust } from './is-just';

export type OkOr = {
  <T, E>(defaultErr: E): { (maybe: maybe<T>): Result<T, E> };
  <T, E>(defaultErr: E, maybe: maybe<T>): Result<T, E>;
};

/**
 * Transforms `Just(v)` to `Ok(v)`, and `Nothing` to a value of `Err` using the provided default error value.
 *
 * The `okOr` function takes a `defaultErr` value and an `Maybe` object as its arguments. If the input `Maybe` object
 * is a `Just`, it wraps its contained value in a new `Ok`. If the input `Maybe` object is a `Nothing`, it wraps the
 * provided `defaultErr` value in a new `Err`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { okOr } from 'tightrope/maybe/ok-or';
 *
 * const defaultError = 'Default error message';
 *
 * const result1 = pipe(new Just(5), okOr(defaultError));
 * // Output: Ok(5)
 *
 * const result2 = pipe(nothing, okOr(defaultError));
 * // Output: Err("Default error message")
 * ```
 *
 * ## Use Cases
 *
 * The `okOr` function is useful when you want to transform an `Maybe` object into a `Result` object, providing a
 * default error value for the `Nothing` cases. This can be helpful when working with optional values and you need to
 * represent the absence of a value as an error in a `Result` type.
 *
 * Just use cases of `okOr` include:
 *
 * - Converting an optional value from a function or API call into a `Result` object with a default error message.
 * - Handling optional values in a pipeline that requires a `Result` type, and providing a default error for `Nothing`
 *   values.
 * - Transforming optional values from one error handling system to another, where the absence of a value is represented
 *   as an error.
 *
 * @tags maybe, transform, transform-maybe, right-biased, unwrap, result
 */
export const okOr: OkOr = curry(
  <T, E>(defaultErr: E, maybe: maybe<T>): Result<T, E> => {
    return isJust<T>(maybe) ? new Ok(maybe.value) : new Err(defaultErr);
  },
  2,
);
