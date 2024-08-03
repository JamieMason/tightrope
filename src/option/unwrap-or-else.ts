import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type UnwrapOrElse = {
  <Opt extends Option.Any, Fn extends () => Option.Type<Opt>>(
    mapFn: Fn,
  ): (option: Opt) => Option.Type<Opt>;
  <Opt extends Option.Any, Fn extends () => Option.Type<Opt>>(
    mapFn: Fn,
    option: Opt,
  ): Option.Type<Opt>;
};

/**
 * Extract value from a `Some` or from a fallback `() => value` if a `None`
 *
 * @tags result, unwrap, transform, transform-result, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or_else
 */
export const unwrapOrElse: UnwrapOrElse = curry(
  <Opt extends Option.Any, Fn extends () => Option.Type<Opt>>(
    mapFn: Fn,
    option: Opt,
  ): Option.Type<Opt> => {
    if (isSome(option)) return option.value;
    return mapFn();
  },
  2,
);
