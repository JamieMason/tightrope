import type { Option } from '.';
import { curry } from '../fn/curry';
import type { Result } from '../result';
import { Err, Ok } from '../result';
import { isSome } from './is-some';

export type OkOrElse = {
  <T, E>(orElseFn: () => E): { (option: Option<T>): Result<T, E> };
  <T, E>(orElseFn: () => E, option: Option<T>): Result<T, E>;
};

/**
 * Transforms an `Option` to a `Result`. A `Some(v)` becomes `Ok(v)` and `None` becomes `Err` using the provided
 * function.
 *
 * The `okOrElse` function takes an `orElseFn` function and an `Option` object as its arguments. If the input `Option`
 * object is a `Some`, it wraps its contained value in a new `Ok`. If the input `Option` object is a `None`, it calls
 * the provided `orElseFn` function to generate an error value and wraps it in a new `Err`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { okOrElse } from 'tightrope/option/ok-or-else';
 *
 * function getDefaultError(): string {
 *   return 'Default error message';
 * }
 *
 * const result1 = pipe(new Some(5), okOrElse(getDefaultError));
 * // Output: Ok(5)
 *
 * const result2 = pipe(none, okOrElse(getDefaultError));
 * // Output: Err("Default error message")
 * ```
 *
 * ## Use Cases
 *
 * The `okOrElse` function is useful when you want to transform an `Option` object into a `Result` object, providing a
 * custom error value for the `None` cases. This can be helpful when working with optional values and you need to
 * represent the absence of a value as an error in a `Result` type.
 *
 * Some use cases of `okOrElse` include:
 *
 * - Converting an optional value from a function or API call into a `Result` object with a custom error message.
 * - Handling optional values in a pipeline that requires a `Result` type, and generating a custom error for `None`
 *   values.
 * - Transforming optional values from one error handling system to another, where the absence of a value is represented
 *   as an error.
 *
 * @tags option, transform, result
 */
export const okOrElse: OkOrElse = curry(
  <T, E>(orElseFn: () => E, option: Option<T>): Result<T, E> => {
    return isSome<T>(option) ? new Ok(option.value) : new Err(orElseFn());
  },
  2,
);
