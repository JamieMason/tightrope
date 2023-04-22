import { curry } from '../fn/curry';
import type { AnyResult, ResErr, ResOk } from '../fn/types';
import { isOk } from './is-ok';
import { withCatch } from './lib/with-catch';

export type MapOrElse = {
  <Res extends AnyResult, Next>(
    mapErrFn: (err: ResErr<Res>) => Next,
    mapOkFn: (value: ResOk<Res>) => Next,
    result: Res,
  ): Next;
  <Res extends AnyResult, Next>(
    mapErrFn: (err: ResErr<Res>) => Next,
    mapOkFn: (value: ResOk<Res>) => Next,
  ): { (result: Res): Next };
  <Res extends AnyResult, Next>(mapErrFn: (err: ResErr<Res>) => Next): {
    <Res extends AnyResult, Next>(mapOkFn: (value: ResOk<Res>) => Next): {
      (result: Res): Next;
    };
    <Res extends AnyResult, Next>(
      mapOkFn: (value: ResOk<Res>) => Next,
      result: Res,
    ): Next;
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
  withCatch(
    <Res extends AnyResult, Next>(
      mapErrFn: (err: ResErr<Res>) => Next,
      mapOkFn: (value: ResOk<Res>) => Next,
      result: Res,
    ): Next => {
      return isOk<ResOk<Res>>(result)
        ? mapOkFn(result.value)
        : mapErrFn(result.value);
    },
  ),
  3,
);
