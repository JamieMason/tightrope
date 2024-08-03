import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isErr } from './is-err.js';
import type { Result } from './result.js';

type OrElse = {
  <Res extends Result.Any>(
    mapFn: (err: Result.ErrType<Res>) => Res,
  ): (result: Res) => Res;
  <Res extends Result.Any>(
    mapFn: (err: Result.ErrType<Res>) => Res,
    result: Res,
  ): Res;
};

/**
 * Like the `||` operator, but applied to `Result` types with an `() => Ok`.
 * @tags result, transform, transform-result, recover, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.or_else
 */
export const orElse: OrElse = curry(
  withSafety(
    <Res extends Result.Any>(
      mapFn: (err: Result.ErrType<Res>) => Res,
      result: Res,
    ): Res => (isErr(result) ? mapFn(result.value) : result),
  ),
  2,
);
