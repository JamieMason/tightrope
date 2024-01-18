import { Ok } from './index.js';

/**
 * Check if value is an instance of the `Ok` class.
 *
 * This can be used to handle error cases in a program flow that uses the `Result` type.
 *
 * For example, it can be used to check if the result of a function that returns a `Result` is an `Ok` or an `Err`, and
 * take different actions depending on the outcome.
 *
 * It can also be used for validation or error checking, to make sure that the value passed to a function or module is
 * of the expected type.
 *
 * @tags result, guard
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.is_ok
 */
export function isOk<OkT>(value: unknown): value is Ok<OkT> {
  return value instanceof Ok && value._tag === 'Ok';
}
