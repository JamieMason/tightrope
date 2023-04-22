import type { Option } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type Expect = {
  <T>(msg: string): { (opt: Option<T>): T };
  <T>(msg: string, opt: Option<T>): T;
};

/**
 * Unwraps an `Option` value, returning the underlying value if it is `Some`. If the value is `None`, this function
 * panics with the provided error message.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { expect } from 'tightrope/option/expect';
 * import { Some } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 *
 * pipe(new Some(2), expect('Expected to have a value')); // 2
 *
 * pipe(none, expect('Expected to have a value')); // throws 'Expected to have a value'
 * ```
 *
 * :::info
 *
 * This function is right-biased, meaning that it panics without evaluating the provided error message if the input
 * `Option` is `None`.
 *
 * :::
 *
 * :::warning
 *
 * Use `expect` only when you are sure that the value is `Some`. Otherwise, consider using a safer alternative such as
 * `unwrap`, `unwrapOr`, `unwrapOrElse` or `map` to handle the `None` case safely.
 *
 * :::
 *
 * @param msg The error message to use in case the value is `None`.
 * @param opt The `Option` to unwrap.
 * @returns The unwrapped value.
 * @tags option, unwrap, unsafe, right-biased
 */
export const expect: Expect = curry(<T>(msg: string, opt: Option<T>): T => {
  if (isSome<T>(opt)) return opt.value;
  throw new Error(msg);
}, 2);
