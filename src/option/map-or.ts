import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type MapOr = {
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
    mapFn: (value: T) => T,
    option: Opt,
  ): T;
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
    mapFn: (value: T) => T,
  ): (option: Opt) => T;
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
  ): {
    <Opt extends Option.Any, T extends Option.Type<Opt>>(
      mapFn: (value: T) => T,
    ): (option: Opt) => T;
    <Opt extends Option.Any, T extends Option.Type<Opt>>(
      mapFn: (value: T) => T,
      option: Opt,
    ): T;
  };
};

/**
 * Applies the provided function to the contained value of `Some`, or returns the provided default value if the `Option`
 * is `None`.
 *
 * @tags option, transform, transform-option, right-biased, unwrap
 */
export const mapOr: MapOr = curry(
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
    mapFn: (value: T) => T,
    option: Opt,
  ): T => {
    return isSome(option) ? mapFn(option.value) : defaultValue;
  },
  3,
);
