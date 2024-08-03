import { curry } from '../fn/curry.js';
import type { AnyOption } from '../fn/types.js';
import type { Option } from './index.js';
import { none } from './index.js';
import { isSome } from './is-some.js';

export type Filter = {
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
  ): (opt: I) => Option<O>;
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
    opt: I,
  ): Option<O>;
};

/**
 * Calls the provided predicate function on the contained value I if the `Option` is `Some(I)`, and returns `Some(I)` if
 * the function returns `true`; otherwise, returns `None`
 *
 * @tags option, filter, right-biased
 */
export const filter: Filter = curry(
  <
    Fn extends (value: any) => value is any,
    I extends AnyOption,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    predicate: Fn,
    opt: I,
  ): Option<O> => (isSome<O>(opt) && predicate(opt.value) ? opt : none),
  2,
);
