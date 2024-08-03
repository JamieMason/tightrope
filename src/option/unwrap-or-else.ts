import { curry } from '../fn/curry.js';
import type { Option } from './index.js';
import { isSome } from './is-some.js';

export type UnwrapOrElse = {
  <T>(orElseFn: () => T): (option: Option<T>) => T;
  <T>(orElseFn: () => T, option: Option<T>): T;
};

/**
 * Transforms `Some(v)` to `v`, and `None` to a value computed by the provided function.
 *
 * The `unwrapOrElse` function takes a function that computes a default value and an input `Option` object as its
 * arguments. If the input `Option` object is a `Some`, it returns the inner value. If the input `Option` object is a
 * `None`, it returns the value computed by the provided function.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { unwrapOrElse } from 'tightrope/option/unwrap-or-else';
 *
 * const defaultValueFn = () => 42;
 *
 * pipe(new Some(5), unwrapOrElse(defaultValueFn));
 * // Output: 5
 *
 * pipe(none, unwrapOrElse(defaultValueFn));
 * // Output: 42
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOrElse` function is useful when you want to extract the inner value of an `Option` object and compute a
 * default value using a provided function in case the `Option` is a `None`. It allows you to handle both cases of
 * `Some` and `None` in a flexible way, especially when the default value computation is complex or depends on external
 * factors.
 *
 * Some use cases of `unwrapOrElse` include:
 *
 * - Providing a computed default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   computing a default value using a function.
 * - Handling errors in a way that gracefully falls back to a computed default value, such as when making API calls and
 *   the server returns an error response.
 *
 * @tags option, unwrap, transform, transform-option, errors, left-biased
 */
export const unwrapOrElse: UnwrapOrElse = curry(
  <T>(orElseFn: () => T, option: Option<T>): T => {
    return isSome<T>(option) ? option.value : orElseFn();
  },
  2,
);
