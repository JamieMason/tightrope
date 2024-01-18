import type { Option } from './index.js';
import { curry } from '../fn/curry.js';
import type { Result } from '../result/index.js';
import { Err, Ok } from '../result/index.js';
import { isSome } from './is-some.js';

export type OkOr = {
  <T, E>(defaultErr: E): { (option: Option<T>): Result<T, E> };
  <T, E>(defaultErr: E, option: Option<T>): Result<T, E>;
};

/**
 * Transforms `Some(v)` to `Ok(v)`, and `None` to a value of `Err` using the provided default error value.
 *
 * The `okOr` function takes a `defaultErr` value and an `Option` object as its arguments. If the input `Option` object
 * is a `Some`, it wraps its contained value in a new `Ok`. If the input `Option` object is a `None`, it wraps the
 * provided `defaultErr` value in a new `Err`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { okOr } from 'tightrope/option/ok-or';
 *
 * const defaultError = 'Default error message';
 *
 * const result1 = pipe(new Some(5), okOr(defaultError));
 * // Output: Ok(5)
 *
 * const result2 = pipe(none, okOr(defaultError));
 * // Output: Err("Default error message")
 * ```
 *
 * ## Use Cases
 *
 * The `okOr` function is useful when you want to transform an `Option` object into a `Result` object, providing a
 * default error value for the `None` cases. This can be helpful when working with optional values and you need to
 * represent the absence of a value as an error in a `Result` type.
 *
 * Some use cases of `okOr` include:
 *
 * - Converting an optional value from a function or API call into a `Result` object with a default error message.
 * - Handling optional values in a pipeline that requires a `Result` type, and providing a default error for `None`
 *   values.
 * - Transforming optional values from one error handling system to another, where the absence of a value is represented
 *   as an error.
 *
 * @tags option, transform, transform-option, right-biased, unwrap, result
 */
export const okOr: OkOr = curry(
  <T, E>(defaultErr: E, option: Option<T>): Result<T, E> => {
    return isSome<T>(option) ? new Ok(option.value) : new Err(defaultErr);
  },
  2,
);
