import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type And = {
  <A, B>(b: Option<B>): { (a: Option<A>): Option<B> };
  <A, B>(b: Option<B>, a: Option<A>): Option<B>;
};

/**
 * Combines two `Option`s, returning the second `Option` if both are `Some`, and `None` otherwise.
 *
 * @tags option, transform, transform-option
 */
export const and: And = curry(
  <A, B>(b: Option<B>, a: Option<A>): Option<B> => (isSome(a) ? b : none),
  2,
);
