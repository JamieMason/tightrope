import type { Result } from './result.js';
import { Err } from './result.js';

/**
 * Check if value is an instance of the `Err` class.
 *
 * This can be used to handle error cases in a program flow that uses the `Result` type.
 *
 * For example, it can be used to check if the result of a function that returns a `Result` is an `Err` or an `Ok`, and
 * take different actions depending on the outcome.
 *
 * It can also be used for validation or error checking, to make sure that the value passed to a function or module is
 * of the expected type.
 *
 * @tags result, guard, errors
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.is_err
 */
export function isErr(value: unknown): value is Result.AnyErr {
  return value instanceof Err && value._tag === 'Err';
}
