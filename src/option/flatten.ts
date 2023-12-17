import type { Option } from '.';
import { none } from '.';
import type { AnyOption } from '../fn/types';
import { isSome } from './is-some';

/**
 * Removes one level of nesting from an `Option<Option<T>>`
 *
 * @tags option, transform, transform-option
 */
export function flatten<
  Opt extends Option<AnyOption>,
  Value = Opt extends Option<Option<infer Value>> ? Value : never,
>(opt: Opt): Option<Value> {
  if (isSome<Option<Value>>(opt)) return opt.value;
  return none;
}
