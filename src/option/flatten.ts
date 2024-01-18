import type { Option } from './index.js';
import { none } from './index.js';
import type { AnyOption } from '../fn/types.js';
import { isSome } from './is-some.js';

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
