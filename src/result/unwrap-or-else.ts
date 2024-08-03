import { curry } from '../fn/lib/curry.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type UnwrapOrElse = {
  <
    Res extends Result.Any,
    Fn extends (err: Result.ErrType<Res>) => Result.OkType<Res>,
  >(
    mapFn: Fn,
  ): (result: Res) => Result.OkType<Res>;
  <
    Res extends Result.Any,
    Fn extends (err: Result.ErrType<Res>) => Result.OkType<Res>,
  >(
    mapFn: Fn,
    result: Res,
  ): Result.OkType<Res>;
};

/**
 * Extract value from an `Ok` or from a fallback `() => Ok` if an `Err`
 *
 * @tags result, unwrap, transform, transform-result, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or_else
 */
export const unwrapOrElse: UnwrapOrElse = curry(
  <
    Res extends Result.Any,
    Fn extends (err: Result.ErrType<Res>) => Result.OkType<Res>,
  >(
    mapFn: Fn,
    result: Res,
  ): Result.OkType<Res> => {
    if (isOk(result)) return result.value;
    return mapFn(result.value);
  },
  2,
);
