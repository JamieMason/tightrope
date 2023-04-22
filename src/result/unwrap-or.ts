import type { Result } from '.';
import { pipe } from '../fn/pipe';
import { or } from './or';
import { unwrap } from './unwrap';

/**
 * Extract value from an `Ok` or from a fallback `Ok` if an `Err`.
 *
 * The `unwrapOr` function takes in a `Result` as its argument, and returns the inner `Ok` value if the input `Result`
 * is an `Ok`, or the provided fallback `Result` if the input is an `Err`.
 *
 * :::warning
 *
 * `unwrapOr` will throw if the fallback `Result` is an `Err`.
 *
 * :::
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import type { Result } from 'tightrope/result';
 * import { Err } from 'tightrope/result';
 * import { Ok } from 'tightrope/result';
 * import { unwrapOr } from 'tightrope/result/unwrap-or';
 *
 * function findInArray<T>(array: T[], item: T): Result<T, string> {
 *   const index = array.indexOf(item);
 *   return index === -1 ? new Err(`Could not find ${item}`) : new Ok(array[index] as T);
 * }
 *
 * const result1 = pipe(findInArray([1, 2, 3], 2), unwrapOr(new Ok(10)));
 * console.log(result1);
 * // Output: 2
 *
 * const result2 = pipe(findInArray([1, 2, 3], 4), unwrapOr(new Ok(10)));
 * console.log(result2);
 * // Output: 10
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOr` function is used to extract the value from a `Result` object. If the `Result` object is an `Ok`
 * variant, it returns the value contained within it. If the `Result` object is an `Err` variant, it returns a fallback
 * value provided as an argument.
 *
 * Some use cases of `unwrapOr` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   returning a default value.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * Overall, `unwrapOr` provides a way to handle `Result` objects in a more flexible way and handle both successful and
 * unsuccessful cases.
 *
 * @tags result, unwrap, transform, transform-result, recover, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or
 * @see https://jamiemason.github.io/tightrope/api/result/unwrap-or-else
 * @see https://jamiemason.github.io/tightrope/api/result/unwrap
 * @see https://jamiemason.github.io/tightrope/api/result/match
 */
export function unwrapOr<NextOk>(nextRes: Result<NextOk>) {
  return <OkT>(result: Result<OkT>): OkT | NextOk | never =>
    pipe(result, or(nextRes), unwrap<OkT | NextOk>);
}
