import type { Result } from './index.js';
import { Err, Ok } from './index.js';

/**
 * Create an `Ok` or `Err` from `try...catch`.
 *
 * The purpose of `fromTry` is to safely execute a given function and return either an `Ok` instance with the result or
 * an `Err` instance with the caught error.
 *
 * The function is executed inside a try-catch block and if it runs without errors, `fromTry` returns an `Ok` instance
 * with the result. Otherwise, `fromTry` returns an `Err` instance with the caught error.
 *
 * This function is particularly useful when working with functions that may throw errors, as it allows you to handle
 * those errors gracefully with a `Result` object instead of allowing the error to propagate and crash your
 * application.
 *
 * ## Example
 *
 * ```ts
 * import { fromTry } from 'tightrope/result/from-try';
 *
 * function divide(a: number, b: number): number {
 *   if (b === 0) {
 *     throw new Error('Cannot divide by zero!');
 *   }
 *   return a / b;
 * }
 *
 * const result = fromTry(() => divide(10, 5));
 * // result will be Ok(2)
 *
 * const result2 = fromTry(() => divide(10, 0));
 * // result2 will be an Err with the caught error message
 * ```
 *
 * @tags result, wrap, invoke
 */
export function fromTry<OkT, ErrT = unknown>(fn: () => OkT): Result<OkT, ErrT> {
  try {
    return new Ok(fn());
  } catch (err) {
    return new Err(err as ErrT);
  }
}
