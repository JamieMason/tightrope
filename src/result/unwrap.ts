import type { Result } from './index.js';
import { isOk } from './is-ok.js';

/**
 * Extract value from an `Ok` or throw on an `Err`.
 *
 * :::warning
 *
 * `unwrap` will throw if the `Result` is an `Err`.
 *
 * :::
 *
 * ## Example
 *
 * In this example, we define a function called `divide` that takes two numbers and returns a `Result` type. If the
 * second number is zero, it returns an `Err` type with an error message. Otherwise, it returns an `Ok` type with the
 * result of the division.
 *
 * We then call the `divide` function twice with different arguments and store the results in `result1` and `result2`.
 * We use the `unwrap` function to extract the value from the `Result` type. In the first case, the value is extracted
 * successfully and printed to the console. In the second case, an error is thrown because we are trying to extract the
 * value from an `Err` type.
 *
 * ```ts
 * import type { Result } from 'tightrope/result';
 * import { Err } from 'tightrope/result';
 * import { Ok } from 'tightrope/result';
 * import { unwrap } from 'tightrope/result/unwrap';
 *
 * function divide(a: number, b: number): Result<number, string> {
 *   return b === 0 ? new Err('Cannot divide by zero') : new Ok(a / b);
 * }
 *
 * const result1 = divide(10, 2);
 * console.log(unwrap(result1)); // Output: 5
 *
 * const result2 = divide(10, 0);
 * console.log(unwrap(result2)); // Throws: Error: Cannot divide by zero
 * ```
 *
 * ## Use Cases
 *
 * Common use cases for `unwrap` include:
 *
 * 1. Extracting the value from a `Result` object when you are certain that it is safe to do so.
 * 2. Extracting the value from a `Result` object when you have handled all error cases and want to ensure that the value
 *    is present.
 *
 * @tags result, unwrap, right-biased, unsafe
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap
 */
export function unwrap<OkT, ErrT = unknown>(
  result: Result<OkT, ErrT>,
): OkT | never {
  if (isOk(result)) return result.value;
  if (result.value instanceof Error) throw result.value;
  throw new Error(String(result.value));
}
