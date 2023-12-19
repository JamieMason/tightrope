import type { maybe } from './Maybe.gen';
import { isJust } from './is-just';

/**
 * Transforms `Just(v)` to `v`, or throws an error on a `Nothing`.
 *
 * The `unwrap` function takes an input `Maybe` object as its argument. If the input `Maybe` object is a `Just`, it
 * returns the inner value. If the input `Maybe` object is a `Nothing`, it throws an error.
 *
 * ## Example
 *
 * ```ts
 * import { Maybe } from 'tightrope/maybe';
 * import { nothing } from 'tightrope/maybe';
 * import { Just } from 'tightrope/maybe';
 * import { unwrap } from 'tightrope/maybe/unwrap';
 *
 * console.log(unwrap(new Just(5)));
 * // Output: 5
 *
 * try {
 *   unwrap(nothing);
 * } catch (error) {
 *   console.error(error.message);
 * }
 * // Output: Called `Maybe.unwrap()` on a `Nothing` value
 * ```
 *
 * :::warning
 *
 * Using `unwrap` is considered unsafe since it may throw an error when called on a `Nothing` value. In general, it is
 * preferable to use other functions like `unwrapOr`, `unwrapOrElse`, or `map` that provide more graceful handling of
 * `Nothing` cases. Only use `unwrap` when you are certain that the `Maybe` object contains a `Just` value or when you
 * want the program to fail with an error if it encounters a `Nothing`.
 *
 * :::
 *
 * @tags maybe, unwrap, right-biased, unsafe
 */
export function unwrap<T>(maybe: maybe<T>): T {
  if (isJust<T>(maybe)) return maybe.value;
  throw new Error('Called `Maybe.unwrap()` on a `Nothing` value');
}
