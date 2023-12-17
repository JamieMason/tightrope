import { none } from '.';
import { curry } from '../fn/curry';
import type { AnyOption } from '../fn/types';
import { isSome } from './is-some';

export type And = {
  <A extends AnyOption, B extends AnyOption>(b: B): { (a: A): B };
  <A extends AnyOption, B extends AnyOption>(b: B, a: A): B;
};

/**
 * Combines two `Option`s, returning the second `Option` if both are `Some`, and `None` otherwise.
 *
 * @tags option, transform, transform-option
 */
export const and: And = curry(
  <A extends AnyOption, B extends AnyOption>(b: B, a: A): B =>
    isSome(a) ? b : (none as B),
  2,
);
