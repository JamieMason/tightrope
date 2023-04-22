import { curry } from '../fn/curry';
import type { AnyResult, ResOk } from '../fn/types';
import { isOk } from './is-ok';
import { withCatch } from './lib/with-catch';

export type MapOr = {
  <Next, Res extends AnyResult>(
    defaultValue: Next,
    mapOkFn: (value: ResOk<Res>) => Next,
    result: Res,
  ): Next;
  <Next, Res extends AnyResult>(
    defaultValue: Next,
    mapOkFn: (value: ResOk<Res>) => Next,
  ): { (result: Res): Next };
  <Next>(defaultValue: Next): {
    <Res extends AnyResult>(mapOkFn: (value: ResOk<Res>) => Next): {
      (result: Res): Next;
    };
    <Res extends AnyResult>(
      mapOkFn: (value: ResOk<Res>) => Next,
      result: Res,
    ): Next;
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
  withCatch(
    <Next, Res extends AnyResult>(
      defaultValue: Next,
      mapOkFn: (value: ResOk<Res>) => Next,
      result: Res,
    ): Next => {
      return isOk<ResOk<Res>>(result) ? mapOkFn(result.value) : defaultValue;
    },
  ),
  3,
);
