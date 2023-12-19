import type { Maybe } from '.';
import { nothing } from '.';
import { curry } from '../fn/curry';
import type { AnyOption, OptionType } from '../fn/types';
import { isJust } from './is-just';

export type AndThen = {
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Maybe<infer O> ? Maybe<O> : never,
  >(
    mapFn: Fn,
  ): { (maybe: I): O };
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Maybe<infer O> ? Maybe<O> : never,
  >(
    mapFn: Fn,
    maybe: I,
  ): O;
};

/**
 * Applies a mapping function to the value of an `Maybe`, returning a new `Maybe`. If the input `Maybe` is `Nothing`,
 * the function immediately returns `Nothing` without calling the mapping function.
 *
 * @tags maybe, transform, transform-maybe, right-biased
 */
export const andThen: AndThen = curry(
  <
    Fn extends (value: any) => AnyOption,
    I extends AnyOption,
    V = OptionType<I>,
    O = Fn extends (value: V) => Maybe<infer O> ? Maybe<O> : never,
  >(
    mapFn: Fn,
    maybe: I,
  ): O => (isJust<V>(maybe) ? (mapFn(maybe.value) as O) : (nothing as O)),
  2,
);
