import { isResult } from './is-result.js';
import type { Result } from './result.js';

/**
 * Replace nested Results with one `Result` of the inner value.
 *
 * Flattening only removes one level of nesting at a time
 *
 * - If given an `Ok` with a normal value, returns the `Ok` as is.
 * - If given an `Err` with a normal value, returns the `Err` as is.
 * - If given a `Result` with a `Result` value, returns the inner `Result`.
 *
 * @tags result, transform, transform-result
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten
 */
export function flatten<Res extends Result.Any>(
  value: Res,
): Result<
  Result.OkType<Res> extends Result.Any
    ? Result.OkType<Result.OkType<Res>>
    : Result.OkType<Res>,
  Result.ErrType<Res> extends Result.Any
    ? Result.ErrType<Result.ErrType<Res>>
    : Result.ErrType<Res>
> {
  if (isResult(value)) {
    return isResult(value.value) ? value.value : value;
  }
  throw new Error(`flatten() called with non Result value: ${value}`);
}
