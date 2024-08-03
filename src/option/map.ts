import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

type Map = {
  <Fn extends (value: any) => any, Opt extends Option<Parameters<Fn>[0]>>(
    mapFn: Fn,
  ): (option: Opt) => Option<ReturnType<Fn>>;
  <Fn extends (value: any) => any, Opt extends Option<Parameters<Fn>[0]>>(
    mapFn: Fn,
    option: Opt,
  ): Option<ReturnType<Fn>>;
};

/**
 * Transforms `Option<T>` to `Option<U>` by applying the provided function to the contained value of `Some` and leaving
 * `None` values unchanged.
 *
 * @tags option, transform, transform-value, right-biased
 */
export const map: Map = curry(
  <Fn extends (value: any) => any, Opt extends Option<Parameters<Fn>[0]>>(
    mapFn: Fn,
    option: Opt,
  ): Option<ReturnType<Fn>> =>
    isSome(option) ? Some.create(mapFn(option.value)) : none,
  2,
);
