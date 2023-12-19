import { nothing } from '.';
import { curry } from '../fn/curry';
import type { AnyOption } from '../fn/types';
import { isJust } from './is-just';

export type And = {
  <A extends AnyOption, B extends AnyOption>(b: B): { (a: A): B };
  <A extends AnyOption, B extends AnyOption>(b: B, a: A): B;
};

/**
 * Combines two `Maybe`s, returning the second `Maybe` if both are `Just`, and `Nothing` otherwise.
 *
 * @tags maybe, transform, transform-maybe
 */
export const and: And = curry(
  <A extends AnyOption, B extends AnyOption>(b: B, a: A): B =>
    isJust(a) ? b : (nothing as B),
  2,
);
