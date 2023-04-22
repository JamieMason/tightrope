import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type AndThen = {
  <T, NextT>(mapFn: (value: T) => Option<NextT>): {
    (opt: Option<T>): Option<NextT>;
  };
  <T, NextT>(mapFn: (value: T) => Option<NextT>, opt: Option<T>): Option<NextT>;
};

/**
 * Applies a mapping function to the value of an `Option`, returning a new `Option`.
 *
 * If the input `Option` is `None`, the function immediately returns `None` without calling the mapping function.
 *
 * ## Example
 *
 * This function can be used with the `pipe` function to apply a sequence of transformations to an `Option`:
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { andThen } from 'tightrope/option/and-then';
 * import { Some } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 *
 * pipe(
 *   new Some(2),
 *   andThen((value) => new Some(value * 2)),
 * ); // returns new Some(4)
 *
 * pipe(
 *   none,
 *   andThen((value) => new Some(value * 2)),
 * ); // returns none
 * ```
 *
 * :::info
 *
 * This function is right-biased, meaning that if the input `Option` is `None`, the function immediately returns `None`
 * without calling the mapping function.
 *
 * :::
 *
 * @param mapFn The mapping function to apply to the value of the input `Option`.
 * @param opt The input `Option` to apply the mapping function to.
 * @returns A new `Option` that contains the result of applying the mapping function to the value of the input `Option`.
 * @tags option, transform, transform-option, right-biased
 */

export const andThen: AndThen = curry(
  <T, NextT>(
    mapFn: (value: T) => Option<NextT>,
    opt: Option<T>,
  ): Option<NextT> => {
    if (isSome<T>(opt)) return mapFn(opt.value);
    return none;
  },
  2,
);
