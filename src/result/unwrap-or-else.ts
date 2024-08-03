import { pipe } from '../fn/pipe.js';
import type { Result } from './index.js';
import { orElse } from './or-else.js';
import { unwrap } from './unwrap.js';

/**
 * Extract value from an `Ok` or from a fallback `() => Ok` if an `Err`.
 *
 * Unwrap the value inside an `Ok` variant of a `Result` object, and in the case that the result is an `Err` variant,
 * the function allows you to map the error value to a new `Result` object.
 *
 * The function takes in a mapping function as its argument, which is used to transform the error value to a new
 * `Result` object. The mapping function should take in the error value and return a `Result` object with a different
 * `Ok` type.
 *
 * The return value of the `unwrapOrElse` function is a function that takes in a `Result` object as its argument, and
 * returns either the unwrapped `Ok` value, or the new transformed `Ok` value if the `Result` object is an `Err`
 * variant.
 *
 * :::warning
 *
 * `unwrapOrElse` will throw if the fallback `Result` is an `Err`.
 *
 * :::
 *
 * ## Example
 *
 * In Example 1, `divide(10, 2)` returns an `Ok` result, so the `unwrapOrElse` function is not triggered, and the `pipe`
 * function returns `5`.
 *
 * In Example 2, `divide(10, 0)` returns an `Err` result because it is trying to divide by zero. The `unwrapOrElse`
 * function is triggered, and it returns a new `Ok` result with the value `-1`. The pipe function returns `-1`.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import type { Result } from 'tightrope/result';
 * import { Err } from 'tightrope/result';
 * import { Ok } from 'tightrope/result';
 * import { unwrapOrElse } from 'tightrope/result/unwrap-or-else';
 *
 * function divide(a: number, b: number): Result<number, string> {
 *   return b === 0 ? new Err('Cannot divide by zero') : new Ok(a / b);
 * }
 *
 * // Example 1: Ok result
 * const okResult = pipe(
 *   divide(10, 2),
 *   unwrapOrElse((err) => new Err(`Error occurred: ${err}`)),
 * );
 *
 * console.log(okResult); // Output: 5
 *
 * // Example 2: Error result
 * const errorResult = pipe(
 *   divide(10, 0),
 *   unwrapOrElse<string, number>(() => new Ok(-1)),
 * );
 *
 * console.log(errorResult); // Output: -1
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOrElse` function is used when you want to try to unwrap a value from a `Result` but also provide a
 * fallback value if the `Result` contains an error. Some common use cases of `unwrapOrElse` include:
 *
 * - **Providing a default value**: If you have a `Result` that might contain an error, but you still want to use the
 *   value contained in it, you can use `unwrapOrElse` to provide a default value if the `Result` is an error. For
 *   example, you could use `unwrapOrElse` to get a value from a config file, falling back to a default value if the
 *   config file is not present or contains an error.
 * - **Recovering from errors**: If you have a `Result` that might contain an error, but you can recover from the error,
 *   you can use `unwrapOrElse` to recover from the error and continue with the operation. For example, you could use
 *   `unwrapOrElse` to retry a network request with a different URL if the original request failed.
 * - **Providing detailed error messages**: If you have a `Result` that might contain an error, but you want to provide a
 *   more detailed error message, you can use `unwrapOrElse` to replace the error with a more detailed error message.
 *   For example, you could use `unwrapOrElse` to add additional information to an error message that was returned from
 *   a third-party library.
 *
 * @tags result, unwrap, transform, transform-result, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or_else
 * @see https://jamiemason.github.io/tightrope/api/result/unwrap-or
 * @see https://jamiemason.github.io/tightrope/api/result/unwrap
 * @see https://jamiemason.github.io/tightrope/api/result/match
 */
export function unwrapOrElse<ErrT, NextOk>(
  mapFn: ((err: ErrT) => Result<NextOk, ErrT>) | (() => Result<NextOk, ErrT>),
) {
  return <OkT>(result: Result<OkT, ErrT>): OkT | NextOk | never =>
    pipe(result, orElse(mapFn), unwrap<OkT | NextOk>);
}
