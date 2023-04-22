import type { Option } from '.';
import { isSome } from './is-some';

/**
 * Transforms `Some(v)` to `v`, or throws an error on a `None`.
 *
 * The `unwrap` function takes an input `Option` object as its argument. If the input `Option` object is a `Some`, it
 * returns the inner value. If the input `Option` object is a `None`, it throws an error.
 *
 * ## Example
 *
 * ```ts
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { unwrap } from 'tightrope/option/unwrap';
 *
 * console.log(unwrap(new Some(5)));
 * // Output: 5
 *
 * try {
 *   unwrap(none);
 * } catch (error) {
 *   console.error(error.message);
 * }
 * // Output: Called `Option.unwrap()` on a `None` value
 * ```
 *
 * :::warning
 *
 * Using `unwrap` is considered unsafe since it may throw an error when called on a `None` value. In general, it is
 * preferable to use other functions like `unwrapOr`, `unwrapOrElse`, or `map` that provide more graceful handling of
 * `None` cases. Only use `unwrap` when you are certain that the `Option` object contains a `Some` value or when you
 * want the program to fail with an error if it encounters a `None`.
 *
 * :::
 *
 * @tags option, unwrap, right-biased, unsafe
 */
export function unwrap<T>(option: Option<T>): T {
  if (isSome<T>(option)) return option.value;
  throw new Error('Called `Option.unwrap()` on a `None` value');
}
