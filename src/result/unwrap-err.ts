import type { Result } from './index.js';
import { isErr } from './is-err.js';

/**
 * Extract value from an `Err` or throw on an `Ok`.
 *
 * :::warning
 *
 * `unwrapErr` will throw if the `Result` is an `Ok`.
 *
 * :::
 *
 * ## Example
 *
 * In this example, we're using `pipe` to create a `Result` object with an error message using the `Err` constructor.
 * Then we're passing that `Result` object to `unwrapErr` to extract the error message. Since the `Result` object is in
 * the `Err` variant, `unwrapErr` will return the error message string.
 *
 * In the second example, since result is in the `Ok` variant, `unwrapErr` will throw an error with a message saying
 * that it encountered an `Ok` variant `Result`.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Err } from 'tightrope/result';
 * import { Ok } from 'tightrope/result';
 * import { unwrapErr } from 'tightrope/result/unwrap-err';
 *
 * const err1: string = pipe(new Err('Error message'), unwrapErr);
 * // 'Error message'
 *
 * const err2: string = pipe(new Ok('Success!'), unwrapErr);
 * // throws: Error('unwrapErr encountered Ok<Success!>')
 * ```
 *
 * ## Use Cases
 *
 * `unwrapErr` is used when you have a `Result` object and you want to access the error value inside an `Err` variant.
 * It is often used in scenarios where you know that the result is an error and you want to access the error value
 * directly without having to handle it in an `Err` case.
 *
 * For example, if you have a function that returns a `Result` object and you know that it will always return an error
 * in a certain scenario, you can use `unwrapErr` to access the error value without having to handle it in an `Err`
 * case.
 *
 * Another use case for `unwrapErr` is in test cases, where you want to check that a function returns an error with a
 * specific error message. You can use `unwrapErr` to access the error message and then compare it with the expected
 * value.
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
 * @tags result, unwrap, unsafe, errors
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_err
 * @see https://jamiemason.github.io/tightrope/api/result/expect-err
 */
export function unwrapErr<OkT, ErrT = unknown>(
  result: Result<OkT, ErrT>,
): ErrT | never {
  if (isErr(result)) return result.value;
  throw new Error(`unwrapErr encountered Ok<${result.value}>`);
}
