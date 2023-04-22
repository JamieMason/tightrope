import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type Filter = {
  <T>(predicate: (value: T) => boolean): { (opt: Option<T>): Option<T> };
  <T>(predicate: (value: T) => boolean, opt: Option<T>): Option<T>;
};

/**
 * Calls the provided predicate function on the contained value T if the `Option` is `Some(T)`, and returns `Some(T)` if
 * the function returns `true`; otherwise, returns `None`
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { filter } from 'tightrope/option/filter';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 *
 * const result = pipe(
 *   new Some(2),
 *   filter((value) => value % 2 === 0),
 * );
 * // result is a new Some(2)
 *
 * const result2 = pipe(
 *   none,
 *   filter((value) => value % 2 === 0),
 * );
 * // result2 is none
 * ```
 *
 * :::info
 *
 * This function is right-biased, meaning that if the input `Option` is `None`, it immediately returns `None` without
 * evaluating the predicate function.
 *
 * :::
 *
 * @param predicate The function to call on the contained value of the `Option`.
 * @param opt The `Option` to apply the filter to.
 * @returns An `Option` with the same type as the input that contains the filtered value, or `None`.
 * @tags option, filter, right-biased
 */
export const filter: Filter = curry(
  <T>(predicate: (value: T) => boolean, opt: Option<T>): Option<T> => {
    if (isSome<T>(opt) && predicate(opt.value)) return opt;
    return none;
  },
  2,
);
