import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';
import { None } from './option.js';

type And = {
  <B extends Option.Any, A extends Option.Any>(
    b: B,
  ): (a: A) => Option.Union<B, A>;
  <B extends Option.Any, A extends Option.Any>(b: B, a: A): Option.Union<B, A>;
};

/**
 * Combines two `Option`s, returning the second `Option` if both are `Some`, and `None` otherwise.
 *
 * @tags option, transform, transform-option
 */
export const and: And = curry(
  <B extends Option.Any, A extends Option.Any>(
    b: B,
    a: A,
  ): Option.Union<B, A> => (isSome(a) ? b : None.create()),
  2,
);
