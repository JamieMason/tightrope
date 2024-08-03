import { curry } from '../fn/curry.js';
import type { Option } from './index.js';
import { isSome } from './is-some.js';

export type UnwrapOr = {
  <T>(defaultValue: T): (option: Option<T>) => T;
  <T>(defaultValue: T, option: Option<T>): T;
};

/**
 * Transforms `Some(v)` to `v`, and `None` to a provided default value.
 *
 * The `unwrapOr` function takes a default value and an input `Option` object as its arguments. If the input `Option`
 * object is a `Some`, it returns the inner value. If the input `Option` object is a `None`, it returns the provided
 * default value.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { unwrapOr } from 'tightrope/option/unwrap-or';
 *
 * pipe(new Some(5), unwrapOr(42));
 * // Output: 5
 *
 * pipe(none, unwrapOr(42));
 * // Output: 42
 * ```
 *
 * ## Use Cases
 *
 * The `unwrapOr` function is useful when you want to extract the inner value of an `Option` object and provide a
 * default value in case the `Option` is a `None`. It allows you to handle both cases of `Some` and `None` in a
 * straightforward manner.
 *
 * Some use cases of `unwrapOr` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   return a default value.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags option, unwrap, transform, transform-option, recover, errors, left-biased
 */
export const unwrapOr: UnwrapOr = curry(
  <T>(defaultValue: T, option: Option<T>): T => {
    return isSome<T>(option) ? option.value : defaultValue;
  },
  2,
);
