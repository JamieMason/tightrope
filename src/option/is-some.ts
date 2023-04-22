import { Some } from '.';

/**
 * Determines whether a value is an instance of `Some`.
 *
 * ## Example
 *
 * ```ts
 * import { isSome } from 'tightrope/option/is-some';
 * import { Some } from 'tightrope/option';
 *
 * console.log(isSome(new Some('hello'))); // true
 * console.log(isSome('not a some')); // false
 * ```
 *
 * @param value The value to check.
 * @returns `true` if the value is a `Some`, `false` otherwise.
 * @tags option, guard
 */
export function isSome<SomeT>(value: unknown): value is Some<SomeT> {
  return value instanceof Some && value._tag === 'Some';
}
