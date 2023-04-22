import type { Option } from '.';
import { none } from '.';
import { isSome } from './is-some';

/**
 * Removes one level of nesting from an `Option<Option<T>>`
 *
 * ## Example
 *
 * ```ts
 * import { flatten } from 'tightrope/option/flatten';
 * import { Some } from 'tightrope/option';
 * import { none } from 'tightrope/option';
 *
 * flatten(new Some(new Some(2))); // new Some(2)
 * flatten(new Some(none)); // none
 * flatten(none); // none
 * ```
 *
 * ## Use Cases
 *
 * - Flattening a nested `Option` returned by a function that may fail
 * - Simplifying code that works with nested `Option`s
 * - Transforming an `Option<Option<T>>` into an `Option<T>`
 *
 * @param opt The `Option<Option<T>>` to flatten
 * @returns The flattened `Option<T>`
 * @tags option, transform, transform-option
 */
export function flatten<T>(opt: Option<Option<T>>): Option<T> {
  if (isSome<T>(opt)) return opt.value;
  return none;
}
