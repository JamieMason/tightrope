import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isErr } from './is-err.js';
import type { Result } from './result.js';
import { Err } from './result.js';

type MapErr = {
  <Res extends Result.Any, T>(
    mapFn: (err: Result.ErrType<Res>) => T,
  ): (result: Res) => Result<Result.OkType<Res>, T>;
  <Res extends Result.Any, T>(
    mapFn: (err: Result.ErrType<Res>) => T,
    result: Res,
  ): Result<Result.OkType<Res>, T>;
};

/**
 * Transform the value inside the `Err` variant of a `Result`.
 *
 * If the input `Result` is an `Err`, the function applies `mapFn` to the error value and returns a new `Result` object
 * with the transformed error value. If the input `Result` is an `Ok`, it simply returns the input `Result` object
 * unmodified.
 *
 * This function is similar to `map`, but instead of transforming the `Ok` value, it transforms the `Err` value.
 *
 * @tags result, transform, transform-value, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.map_err
 */
export const mapErr: MapErr = curry(
  withSafety(
    <Res extends Result.Any, T>(
      mapFn: (err: Result.ErrType<Res>) => T,
      result: Res,
    ): Result<Result.OkType<Res>, T> =>
      isErr(result) ? Err.create(mapFn(result.value)) : result,
  ),
  2,
);
