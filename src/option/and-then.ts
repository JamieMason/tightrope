import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import type { AnyOption, OptionType } from '../fn/types';
import { isSome } from './is-some';

export type AndThen = {
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Option<infer O> ? Option<O> : never,
  >(
    mapFn: Fn,
  ): { (option: I): O };
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Option<infer O> ? Option<O> : never,
  >(
    mapFn: Fn,
    option: I,
  ): O;
};

/**
 * Applies a mapping function to the value of an `Option`, returning a new `Option`. If the input `Option` is `None`,
 * the function immediately returns `None` without calling the mapping function.
 *
 * @tags option, transform, transform-option, right-biased
 */
export const andThen: AndThen = curry(
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Option<infer O> ? Option<O> : never,
  >(
    mapFn: Fn,
    option: I,
  ): O => (isSome<V>(option) ? (mapFn(option.value) as O) : (none as O)),
  2,
);
