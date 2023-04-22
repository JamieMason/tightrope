import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type And = {
  <T, NextT>(optB: Option<NextT>): { (optA: Option<T>): Option<NextT> };
  <T, NextT>(optB: Option<NextT>, optA: Option<T>): Option<NextT>;
};

/**
 * Combines two `Option`s, returning the second `Option` if both are `Some`, and `None` otherwise.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { and } from 'tightrope/option/and';
 * import { Some } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 *
 * pipe(new Some(2), and(new Some(3))); // new Some(3)
 * pipe(new Some(2), and(none)); // none
 * ```
 *
 * ## Use Cases
 *
 * The `and` function is useful when you need to combine two `Option` values, but only want to produce a result if both
 * `Option`s contain a value. Some common use cases for `and` include:
 *
 * - Combining the result of two `Option` values in a safe way, without the need for nested `if` statements or null
 *   checks.
 * - Filtering a list of `Option` values by returning only the values that satisfy a certain condition.
 * - Using the value of one `Option` to perform a lookup or operation on a data structure, and only proceeding if the
 *   lookup or operation succeeds.
 * - Providing a default value or fallback `Option` in case the original `Option` value is `None`.
 *
 * @tags option, transform, transform-option
 */
export const and: And = curry(
  <T, NextT>(optB: Option<NextT>, optA: Option<T>): Option<NextT> => {
    if (isSome(optA)) return optB;
    return none;
  },
  2,
);
