import type { Maybe } from '.';
import { nothing } from '.';
import { curry } from '../fn/curry';
import type { AnyOption } from '../fn/types';
import { isJust } from './is-just';

export type Filter = {
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
  ): { (opt: I): Maybe<O> };
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
    opt: I,
  ): Maybe<O>;
};

/**
 * Calls the provided predicate function on the contained value I if the `Maybe` is `Just(I)`, and returns `Just(I)` if
 * the function returns `true`; otherwise, returns `Nothing`
 *
 * @tags maybe, filter, right-biased
 */
export const filter: Filter = curry(
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
    opt: I,
  ): Maybe<O> => (isJust<O>(opt) && predicate(opt.value) ? opt : nothing),
  2,
);
