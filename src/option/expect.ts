import { curry } from '../fn/curry.js';
import type { Option } from './index.js';
import { isSome } from './is-some.js';

export type Expect = {
  <T>(msg: string): (option: Option<T>) => T;
  <T>(msg: string, option: Option<T>): T;
};

/**
 * Unwraps an `Option` value, returning the underlying value if it is `Some`. If the value is `None`, this function
 * panics with the provided error message.
 *
 * @tags option, unwrap, unsafe, right-biased
 */
export const expect: Expect = curry(<T>(msg: string, option: Option<T>): T => {
  if (isSome<T>(option)) return option.value;
  throw new Error(msg);
}, 2);
