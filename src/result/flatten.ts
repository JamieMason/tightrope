import type { Result } from './index.js';
import { isResult } from './is-result.js';

/**
 * Replace nested Results with one `Result` of the innermost value.
 *
 * A function that recursively unwraps nested `Result` objects to return the innermost `Result`. It takes a value which
 * can be a regular value, an `Ok`, an `Err`, or a nested `Result`.
 *
 * If the value is an `Ok` , `flatten` returns the value as is. If the value is an `Err`, `flatten` returns the value as
 * is. If the value is a nested `Result`, `flatten` recursively unwraps it until it reaches the innermost `Result`
 * object and returns it.
 *
 * ## Examples
 *
 * In this contrived example we use the `pipe` function to pass a value of `12` through a series of function calls.
 *
 * The first function called is `Ok.create`, which wraps the value in an `Ok` instance. This `Ok` instance is then
 * passed as the input to two more `Ok.create` calls, which each wrap the value again in a nested `Ok` instance.
 *
 * Finally, the `flatten` function is called using `pipe`, which will recursively unwrap any nested `Ok` instances to
 * get the innermost value. In this case, the nested `Ok` instances are unwrapped to reveal the value of `12`, which is
 * returned as an `Ok` instance in the `result` variable.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { flatten } from 'tightrope/result/flatten';
 * import { Ok.create } from 'tightrope/result/from-success';
 * import type { Ok } from 'tightrope/result';
 *
 * const result: Ok<number> = pipe(12, Ok.create, Ok.create, Ok.create, flatten);
 * // result will be Ok(12)
 * ```
 *
 * ## Use Cases
 *
 * The `flatten` function is useful when working with nested `Result` instances.
 *
 * When you have a sequence of operations that return `Result` instances, each of which may have their own nested
 * `Result` instances, you can use `flatten` to combine them into a single `Result` instance. This can make it easier to
 * work with the overall result, since you don't have to keep unwrapping nested `Result` instances at each step.
 *
 * Common use cases for `flatten` include:
 *
 * - Working with nested API responses or database queries, where each operation returns a `Result` instance.
 * - Combining multiple `Result` instances from different sources, such as multiple API calls, into a single result that
 *   can be used by the rest of your code.
 * - Handling error conditions where multiple `Result` instances may be nested inside each other, such as when validating
 *   a complex data structure.
 *
 * @tags result, transform, transform-result
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten
 */
export function flatten<OkT, ErrT = unknown>(
  value: OkT | ErrT | Result<OkT, ErrT>,
): Result<OkT, ErrT> {
  if (isResult<OkT, ErrT>(value)) return getNested(value);
  throw new Error(`flatten() called with non Result value: ${value}`);
}

function getNested<OkT, ErrT>(value: Result<OkT, ErrT>): Result<OkT, ErrT> {
  return isResult<OkT, ErrT>(value.value)
    ? getNested<OkT, ErrT>(value.value)
    : value;
}
