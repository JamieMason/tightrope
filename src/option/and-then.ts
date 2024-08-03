import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';
import { none } from './option.js';

type AndThen = {
  <Opt extends Option.Any, Fn extends (value: any) => Option.Any>(
    mapFn: Fn,
  ): (option: Opt) => ReturnType<Fn>;
  <Opt extends Option.Any, Fn extends (value: any) => Option.Any>(
    mapFn: Fn,
    option: Opt,
  ): ReturnType<Fn>;
};

/**
 * Applies a mapping function to the value of an `Option`, returning a new `Option`. If the input `Option` is `None`,
 * the function immediately returns `None` without calling the mapping function.
 *
 * @tags option, transform, transform-option, right-biased
 */
export const andThen: AndThen = curry(
  <Opt extends Option.Any, Fn extends (value: any) => Option.Any>(
    mapFn: Fn,
    option: Opt,
  ): ReturnType<Fn> => (isSome(option) ? mapFn(option.value) : (none as any)),
  2,
);
