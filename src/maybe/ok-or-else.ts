import type { Maybe } from '.';
import { curry } from '../fn/curry';
import type { Result } from '../result';
import { Err, Ok } from '../result';
import { isJust } from './is-just';

export type OkOrElse = {
  <T, E>(orElseFn: () => E): { (maybe: Maybe<T>): Result<T, E> };
  <T, E>(orElseFn: () => E, maybe: Maybe<T>): Result<T, E>;
};

/**
 * Transforms an `Maybe` to a `Result`. A `Just(v)` becomes `Ok(v)` and `Nothing` becomes `Err` using the provided
 * function.
 *
 * The `okOrElse` function takes an `orElseFn` function and an `Maybe` object as its arguments. If the input `Maybe`
 * object is a `Just`, it wraps its contained value in a new `Ok`. If the input `Maybe` object is a `Nothing`, it calls
 * the provided `orElseFn` function to generate an error value and wraps it in a new `Err`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { okOrElse } from 'tightrope/maybe/ok-or-else';
 *
 * function getDefaultError(): string {
 *   return 'Default error message';
 * }
 *
 * const result1 = pipe(new Just(5), okOrElse(getDefaultError));
 * // Output: Ok(5)
 *
 * const result2 = pipe(nothing, okOrElse(getDefaultError));
 * // Output: Err("Default error message")
 * ```
 *
 * ## Use Cases
 *
 * The `okOrElse` function is useful when you want to transform an `Maybe` object into a `Result` object, providing a
 * custom error value for the `Nothing` cases. This can be helpful when working with optional values and you need to
 * represent the absence of a value as an error in a `Result` type.
 *
 * Just use cases of `okOrElse` include:
 *
 * - Converting an optional value from a function or API call into a `Result` object with a custom error message.
 * - Handling optional values in a pipeline that requires a `Result` type, and generating a custom error for `Nothing`
 *   values.
 * - Transforming optional values from one error handling system to another, where the absence of a value is represented
 *   as an error.
 *
 * @tags maybe, transform, result
 */
export const okOrElse: OkOrElse = curry(
  <T, E>(orElseFn: () => E, maybe: Maybe<T>): Result<T, E> => {
    return isJust<T>(maybe) ? new Ok(maybe.value) : new Err(orElseFn());
  },
  2,
);
