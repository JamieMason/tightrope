import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type Expect = {
  <Opt extends Option.Any>(
    msg: string,
  ): (option: Opt) => Opt extends Option<infer T> ? T : never;
  <Opt extends Option.Any>(
    msg: string,
    option: Opt,
  ): Opt extends Option<infer T> ? T : never;
};

/**
 * Unwraps an `Option` value, returning the underlying value if it is `Some`. If the value is `None`, this function
 * panics with the provided error message.
 *
 * @tags option, unwrap, unsafe, right-biased
 */
export const expect: Expect = curry(
  <Opt extends Option.Any>(
    msg: string,
    option: Opt,
  ): Opt extends Option<infer T> ? T : never => {
    if (isSome(option)) return option.value;
    throw new Error(msg);
  },
  2,
);
