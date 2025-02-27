import { curry } from '../fn/lib/curry.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type OrElse = {
  <Opt extends Option.Any>(orElseFn: () => Opt): (option: Opt) => Opt;
  <Opt extends Option.Any>(orElseFn: () => Opt, option: Opt): Opt;
};

/**
 * Transforms `Some(v)` to `Some(v)`, and `None` to a new `Option` using the provided function.
 *
 * The `orElse` function takes a function `orElseFn` and an `Option` object as its arguments. If the input `Option`
 * object is a `Some`, it returns the same `Some` object. If the input `Option` object is a `None`, it calls the
 * provided `orElseFn` function and returns the resulting `Option`.
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Option } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 * import { orElse } from 'tightrope/option/or-else';
 *
 * const defaultOption = () => Some.create(42);
 *
 * const option1 = pipe(Some.create(5), orElse(defaultOption));
 * // Output: Some(5)
 *
 * const option2 = pipe(none, orElse(defaultOption));
 * // Output: Some(42)
 * ```
 *
 * ## Use Cases
 *
 * The `orElse` function is useful when you want to provide a fallback `Option` object in case the input `Option` is a
 * `None`. It allows you to handle both cases of `Some` and `None` in a more flexible way.
 *
 * Some use cases of `orElse` include:
 *
 * - Providing a default value for cases when a value is not found in a collection or when an operation fails.
 * - Mapping over a collection and returning the first element that meets a specific criteria. If no element is found,
 *   returning a default `Option`.
 * - Handling errors in a way that gracefully falls back to a default value, such as when making API calls and the server
 *   returns an error response.
 *
 * @tags option, transform, transform-option, recover, errors, left-biased
 */
export const orElse: OrElse = curry(
  <Opt extends Option.Any>(orElseFn: () => Opt, option: Opt): Opt =>
    isSome(option) ? option : orElseFn(),
  2,
);
