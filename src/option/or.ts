import { curry } from '../fn/curry.js';
import type { Option } from './index.js';
import { isSome } from './is-some.js';

export type Or = {
  <T>(defaultOption: Option<T>): (option: Option<T>) => Option<T>;
  <T>(defaultOption: Option<T>, option: Option<T>): Option<T>;
};

/**
 * Transforms `Some(v)` to `Some(v)`, and `None` to the provided default `Option`.
 *
 * The `or` function takes a default `Option` object and an input `Option` object as its arguments. If the input
 * `Option` object is a `Some`, it returns the same `Some` object. If the input `Option` object is a `None`, it returns
 * the provided default `Option` object.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { or } from 'tightrope/option/or';
 *
 * const defaultOption = new Some(42);
 *
 * pipe(new Some(5), or(defaultOption));
 * // Output: Some(5)
 *
 * pipe(none, or(defaultOption));
 * // Output: Some(42)
 * ```
 *
 * ## Use Cases
 *
 * The `or` function is useful when you want to provide a fallback `Option` object in case the input `Option` is a
 * `None`. It allows you to handle both cases of `Some` and `None` in a more flexible way.
 *
 * Some use cases of `or` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   returning a default `Option`.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags option, transform, transform-option, recover, errors, left-biased
 */
export const or: Or = curry(
  <T>(defaultOption: Option<T>, option: Option<T>): Option<T> => {
    return isSome(option) ? option : defaultOption;
  },
  2,
);
