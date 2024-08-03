import { isSome } from './is-some.js';
import type { Option } from './option.js';
import { none } from './option.js';

/**
 * Removes one level of nesting from an `Option<Option<T>>`
 *
 * @tags option, transform, transform-option
 */
export function flatten<
  Opt extends Option<Option.Any>,
  T = Opt extends Option<Option<infer T>> ? T : unknown,
>(opt: Opt): Option<T> {
  if (isSome<Option<T>>(opt)) return opt.value;
  return none;
}
