import { curry } from '../fn/lib/curry.js';
import type { Guard } from '../guard/index.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';
import { none } from './option.js';

type Filter = {
  <Opt extends Option.Any, Fn extends Guard.Unary>(
    guard: Fn,
  ): (option: Opt) => Option<Guard.UnaryType<Fn>>;
  <Opt extends Option.Any, Fn extends Guard.Unary>(
    guard: Fn,
    option: Opt,
  ): Option<Guard.UnaryType<Fn>>;
};

/**
 * Calls the provided predicate function on the contained value I if the `Option` is `Some(I)`, and returns `Some(I)` if
 * the function returns `true`; otherwise, returns `None`
 *
 * @tags option, filter, right-biased
 */
export const filter: Filter = curry(
  <Opt extends Option.Any, Fn extends Guard.Unary>(
    guard: Fn,
    option: Opt,
  ): Option<Guard.UnaryType<Fn>> =>
    isSome(option) && guard(option.value) ? option : none,
  2,
);
