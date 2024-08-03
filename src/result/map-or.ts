import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type MapOr = {
  <Res extends Result.Any, T extends Result.OkType<Res>>(
    defaultValue: T,
    mapOkFn: (value: T) => T,
    result: Res,
  ): T;
  <Res extends Result.Any, T extends Result.OkType<Res>>(
    defaultValue: T,
    mapOkFn: (value: T) => T,
  ): (result: Res) => T;
  <Res extends Result.Any, T extends Result.OkType<Res>>(
    defaultValue: T,
  ): {
    <Res extends Result.Any, T extends Result.OkType<Res>>(
      mapOkFn: (value: T) => T,
    ): (result: Res) => T;
    <Res extends Result.Any, T extends Result.OkType<Res>>(
      mapOkFn: (value: T) => T,
      result: Res,
    ): T;
  };
};

/**
 * Returns the provided default (if `Err`), or applies a function to the contained value (if `Ok`),
 *
 * Arguments passed to `mapOr` are eagerly evaluated; if you are passing the result of a function call, it is
 * recommended to use `mapOrElse`, which is lazily evaluated.
 *
 * @tags result, transform, transform-result, right-biased, unwrap
 */
export const mapOr: MapOr = curry(
  withSafety(
    <Res extends Result.Any, T extends Result.OkType<Res>>(
      defaultValue: T,
      mapOkFn: (value: T) => T,
      result: Res,
    ): T => {
      return isOk(result) ? mapOkFn(result.value) : defaultValue;
    },
  ),
  3,
);
