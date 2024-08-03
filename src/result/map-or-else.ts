import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type MapOrElse = {
  <Res extends Result.Any, T>(
    mapErrFn: (err: Result.ErrType<Res>) => T,
    mapOkFn: (value: Result.OkType<Res>) => T,
    result: Res,
  ): T;
  <Res extends Result.Any, T>(
    mapErrFn: (err: Result.ErrType<Res>) => T,
    mapOkFn: (value: Result.OkType<Res>) => T,
  ): (result: Res) => T;
  <Res extends Result.Any, T>(
    mapErrFn: (err: Result.ErrType<Res>) => T,
  ): {
    <Res extends Result.Any, T>(
      mapOkFn: (value: Result.OkType<Res>) => T,
    ): (result: Res) => T;
    <Res extends Result.Any, T>(
      mapOkFn: (value: Result.OkType<Res>) => T,
      result: Res,
    ): T;
  };
};

/**
 * Maps a `Result` by applying fallback function default to a contained `Err` value, or a function to a contained `Ok`
 * value.
 *
 * This function can be used to unpack a successful result while handling an error.
 *
 * @tags result, transform, transform-result, right-biased, unwrap
 */
export const mapOrElse: MapOrElse = curry(
  withSafety(
    <Res extends Result.Any, T>(
      mapErrFn: (err: Result.ErrType<Res>) => T,
      mapOkFn: (value: Result.OkType<Res>) => T,
      result: Res,
    ): T => (isOk(result) ? mapOkFn(result.value) : mapErrFn(result.value)),
  ),
  3,
);
