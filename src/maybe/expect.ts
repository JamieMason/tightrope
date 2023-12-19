import type { maybe } from './Maybe.gen';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type Expect = {
  <T>(msg: string): { (maybe: maybe<T>): T };
  <T>(msg: string, maybe: maybe<T>): T;
};

/**
 * Unwraps an `Maybe` value, returning the underlying value if it is `Just`. If the value is `Nothing`, this function
 * panics with the provided error message.
 *
 * @tags maybe, unwrap, unsafe, right-biased
 */
export const expect: Expect = curry(<T>(msg: string, maybe: maybe<T>): T => {
  if (isJust<T>(maybe)) return maybe.value;
  throw new Error(msg);
}, 2);
