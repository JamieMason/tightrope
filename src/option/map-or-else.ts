import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type MapOrElse = {
  <
    MapNoneFn extends () => any,
    MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
    Opt extends Option<Parameters<MapSomeFn>[0]>,
  >(
    mapNoneFn: MapNoneFn,
    mapSomeFn: MapSomeFn,
    option: Opt,
  ): ReturnType<MapNoneFn>;
  <
    MapNoneFn extends () => any,
    MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
    Opt extends Option<Parameters<MapSomeFn>[0]>,
  >(
    mapNoneFn: MapNoneFn,
    mapSomeFn: MapSomeFn,
  ): (option: Opt) => ReturnType<MapNoneFn>;
  <
    MapNoneFn extends () => any,
    MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
    _Opt extends Option<Parameters<MapSomeFn>[0]>,
  >(
    mapNoneFn: MapNoneFn,
  ): {
    <
      MapNoneFn extends () => any,
      MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
      Opt extends Option<Parameters<MapSomeFn>[0]>,
    >(
      mapSomeFn: MapSomeFn,
    ): (option: Opt) => ReturnType<MapNoneFn>;
    <
      MapNoneFn extends () => any,
      MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
      Opt extends Option<Parameters<MapSomeFn>[0]>,
    >(
      mapSomeFn: MapSomeFn,
      option: Opt,
    ): ReturnType<MapNoneFn>;
  };
};

/**
 * Applies the provided function to the contained value of `Some`, or returns the result of evaluating the provided
 * fallback function if the `Option` is `None`
 *
 * @param mapFn The function to apply to the contained value of `Some`.
 * @param defaultFn The fallback function to evaluate if the `Option` is `None`.
 * @param opt The `Option` to apply the provided function to.
 * @returns The result of applying the provided function to the contained value of `Some`, or the result of evaluating
 *   the fallback function if the `Option` is `None`.
 * @tags option, transform, transform-option, right-biased, unwrap, result
 */
export const mapOrElse: MapOrElse = curry(
  <
    MapNoneFn extends () => any,
    MapSomeFn extends (value: any) => ReturnType<MapNoneFn>,
    Opt extends Option<Parameters<MapSomeFn>[0]>,
  >(
    mapNoneFn: MapNoneFn,
    mapSomeFn: MapSomeFn,
    option: Opt,
  ): ReturnType<MapNoneFn> =>
    isSome(option) ? mapSomeFn(option.value) : mapNoneFn(),
  3,
);
