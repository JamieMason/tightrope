import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type UnwrapOr = {
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
  ): (option: Opt) => Option.Type<Opt>;
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
    option: Opt,
  ): Option.Type<Opt>;
};

/**
 * Extract value from a `Some` or use a fallback value if a `None`
 *
 * @tags option, unwrap, transform, transform-option, recover, errors, left-biased
 * @see https://doc.rust-lang.org/core/option/enum.Option.html#method.unwrap_or
 */
export const unwrapOr: UnwrapOr = curry(
  <Opt extends Option.Any, T extends Option.Type<Opt>>(
    defaultValue: T,
    option: Opt,
  ): Option.Type<Opt> => (isSome(option) ? option.value : defaultValue),
  2,
);
