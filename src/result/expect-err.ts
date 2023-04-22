import type { Result } from '.';
import { isOk } from './is-ok';

/**
 * A higher-order function that takes a message and returns a function that can be used to assert that a given `Result`
 * is an `Err` and return its value.
 *
 * It takes a string message as an argument and returns a function that takes a `Result` and throws a native `Error`
 * with the provided message if the `Result` is an `Ok`, otherwise it returns the inner value of the `Err`.
 *
 * :::warning
 *
 * `expectErr` will throw if the `Result` is an `Ok`.
 *
 * :::
 *
 * ## Example
 *
 * In this example, `expectErr` is used to throw a native `Error` if the `Result` is an `Ok`. If the `Result` is an
 * `Err`, then the function returns the `Err` value.
 *
 * ```ts
 * import type { Result } from 'tightrope/result';
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Err } from 'tightrope/result';
 * import { expectErr } from 'tightrope/result/expect-err';
 * import { Ok } from 'tightrope/result';
 *
 * function divide(a: number, b: number): Result<number, string> {
 *   if (b === 0) {
 *     return new Err('Cannot divide by zero');
 *   }
 *   return new Ok(a / b);
 * }
 *
 * const result = pipe(divide(10, 0), expectErr('Error: expected Err'));
 * // returns: Err('Cannot divide by zero')
 *
 * // throws new Error('Error: expected Err')
 * const result2 = pipe(divide(10, 5), expectErr('Error: expected Err'));
 * ```
 *
 * ## Use Cases
 *
 * `expectErr` is commonly used when you want to handle the error case of a `Result` object, but don't want to handle
 * the `Ok` case explicitly. It is useful when you want to throw an error if the `Result` object is not an `Err`, or if
 * the error message should be customized.
 *
 * One common use case is in error handling, where you expect a `Result` object to contain an error value and you want
 * to handle it in a specific way. Another use case is in testing, where you want to assert that a `Result` object
 * contains an error value and you want to throw an error if it does not.
 *
 * :::tip
 *
 * The `expectErr` function and `unwrapErr` function have different use cases.
 *
 * You would use `expectErr` when you want to explicitly check for an error condition and throw an error if the `Result`
 * is not an error. It is useful for catching programming errors or unexpected behavior.
 *
 * On the other hand, you would use `unwrapErr` when you are certain that the `Result` is an error and you want to get
 * the value inside the `Err` variant. This is useful when you want to propagate the error up the call stack or when you
 * want to handle the error in some specific way.
 *
 * In general, you should use `expectErr` when you want to catch and handle unexpected error conditions and use
 * `unwrapErr` when you want to propagate errors or handle them in a specific way.
 *
 * :::
 *
 * @tags result, unwrap, errors, unsafe
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.expect_err
 * @see https://jamiemason.github.io/tightrope/api/result/unwrap-err
 */
export function expectErr(msg: string) {
  return <OkT, ErrT>(res: Result<OkT, ErrT>) => {
    if (isOk(res)) throw new Error(msg);
    return res.value;
  };
}
