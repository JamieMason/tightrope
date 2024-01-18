import type { Option } from './index.js';
import { curry } from '../fn/curry.js';
import { isSome } from './is-some.js';

export type MapOrElse = {
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U, opt: Option<T>): U;
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U): { (opt: Option<T>): U };
  <T, U>(
    mapFn: (value: T) => U,
  ): {
    <T, U>(defaultFn: () => U): { (opt: Option<T>): U };
    <T, U>(defaultFn: () => U, opt: Option<T>): U;
  };
};

/**
 * Applies the provided function to the contained value of `Some`, or returns the result of evaluating the provided
 * fallback function if the `Option` is `None`
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { mapOrElse } from 'tightrope/option/map-or-else';
 * import { Some } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 *
 * pipe(
 *   new Some('hello'),
 *   mapOrElse(
 *     (value) => value.toUpperCase(),
 *     () => 'default',
 *   ),
 * ); // 'HELLO'
 *
 * pipe(
 *   none,
 *   mapOrElse(
 *     (value) => value.toUpperCase(),
 *     () => 'default',
 *   ),
 * ); // 'default'
 * ```
 *
 * :::info
 *
 * This function is right-biased, meaning that it returns the result of evaluating the fallback function without
 * applying the provided function if the input `Option` is `None`.
 *
 * :::
 *
 * @param mapFn The function to apply to the contained value of `Some`.
 * @param defaultFn The fallback function to evaluate if the `Option` is `None`.
 * @param opt The `Option` to apply the provided function to.
 * @returns The result of applying the provided function to the contained value of `Some`, or the result of evaluating
 *   the fallback function if the `Option` is `None`.
 * @tags option, transform, transform-option, right-biased, unwrap, result
 */
export const mapOrElse: MapOrElse = curry(
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U, opt: Option<T>): U => {
    return isSome<T>(opt) ? mapFn(opt.value) : defaultFn();
  },
  3,
);
