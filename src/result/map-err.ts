import type { Result } from './index.js';
import { Err } from './index.js';
import { isErr } from './is-err.js';
import { withCatch } from './lib/with-catch.js';

/**
 * Transform the value inside the `Err` variant of a `Result`.
 *
 * If the input `Result` is an `Err`, the function applies `mapFn` to the error value and returns a new `Result` object
 * with the transformed error value. If the input `Result` is an `Ok`, it simply returns the input `Result` object
 * unmodified.
 *
 * This function is similar to `map`, but instead of transforming the `Ok` value, it transforms the `Err` value.
 *
 * :::tip
 *
 * If you want to recover from an `Err` and turn it into an `Ok`, use
 * [`orElse`](https://jamiemason.github.io/tightrope/api/result/or-else) or
 * [`or`](https://jamiemason.github.io/tightrope/api/result/or).
 *
 * :::
 *
 * ## Example
 *
 * In this example, the `divide` function returns a `Result<number, string>` with an error message if the second
 * argument is zero. The pipeline then uses `mapErr` to transform any error messages to uppercase, then a 2nd time to a
 * native `Error` instance.
 *
 * The resulting `Result` object has an `Error` instance with its message in uppercase.
 *
 * ```ts
 * import type { Result } from 'tightrope/result';
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Err } from 'tightrope/result';
 * import { mapErr } from 'tightrope/result/map-err';
 * import { Ok } from 'tightrope/result';
 * import { unwrapErr } from 'tightrope/result/unwrap-err';
 *
 * // Define a function that returns a result with an error
 * function divide(a: number, b: number): Result<number, string> {
 *   if (b === 0) {
 *     return new Err('Cannot divide by zero');
 *   }
 *   return new Ok(a / b);
 * }
 *
 * // Create a pipeline that divides two numbers and maps any error messages to
 * // uppercase
 * const result = pipe(
 *   divide(10, 0), // returns Err("Cannot divide by zero")
 *   mapErr((msg) => msg.toUpperCase()), // returns Err("CANNOT DIVIDE BY ZERO")
 *   mapErr((msg) => new Error(msg)), // returns Err(new Error("CANNOT DIVIDE BY ZERO"))
 *   unwrapErr,
 * );
 *
 * console.log(result); // outputs: Error("CANNOT DIVIDE BY ZERO")
 * ```
 *
 * ## Use Cases
 *
 * Some common use cases of `mapErr` include:
 *
 * - Mapping an error to a more user-friendly error message or to a different error type.
 * - Transforming an error into a value that can be used downstream in a pipeline.
 *
 * @tags result, transform, transform-value, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.map_err
 * @see https://jamiemason.github.io/tightrope/api/result/map
 * @see https://jamiemason.github.io/tightrope/api/result/or-else
 * @see https://jamiemason.github.io/tightrope/api/result/or
 */
export function mapErr<OkT, ErrT, NextErr>(mapFn: (err: ErrT) => NextErr) {
  return withCatch((result: Result<OkT, ErrT>): Result<OkT, NextErr> => {
    if (isErr(result)) {
      return Err.create(mapFn(result.value));
    }
    return result;
  });
}
