import type { Maybe } from '.';
import { curry } from '../fn/curry';
import { isJust } from './is-just';

export type MapOrElse = {
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U, opt: Maybe<T>): U;
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U): { (opt: Maybe<T>): U };
  <T, U>(
    mapFn: (value: T) => U,
  ): {
    <T, U>(defaultFn: () => U): { (opt: Maybe<T>): U };
    <T, U>(defaultFn: () => U, opt: Maybe<T>): U;
  };
};

/**
 * Applies the provided function to the contained value of `Just`, or returns the result of evaluating the provided
 * fallback function if the `Maybe` is `Nothing`
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { mapOrElse } from 'tightrope/maybe/map-or-else';
 * import { Just } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 *
 * pipe(
 *   new Just('hello'),
 *   mapOrElse(
 *     (value) => value.toUpperCase(),
 *     () => 'default',
 *   ),
 * ); // 'HELLO'
 *
 * pipe(
 *   nothing,
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
 * applying the provided function if the input `Maybe` is `Nothing`.
 *
 * :::
 *
 * @param mapFn The function to apply to the contained value of `Just`.
 * @param defaultFn The fallback function to evaluate if the `Maybe` is `Nothing`.
 * @param opt The `Maybe` to apply the provided function to.
 * @returns The result of applying the provided function to the contained value of `Just`, or the result of evaluating
 *   the fallback function if the `Maybe` is `Nothing`.
 * @tags maybe, transform, transform-maybe, right-biased, unwrap, result
 */
export const mapOrElse: MapOrElse = curry(
  <T, U>(mapFn: (value: T) => U, defaultFn: () => U, opt: Maybe<T>): U => {
    return isJust<T>(opt) ? mapFn(opt.value) : defaultFn();
  },
  3,
);
