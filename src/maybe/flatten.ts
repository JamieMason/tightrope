import type { maybe } from './Maybe.gen';
import { nothing } from './Maybe.gen';
import type { AnyOption } from '../fn/types';
import { isJust } from './is-just';

/**
 * Removes one level of nesting from an `Maybe<Maybe<T>>`
 *
 * @tags maybe, transform, transform-maybe
 */
export function flatten<
  Opt extends maybe<AnyOption>,
  Value = Opt extends maybe<maybe<infer Value>> ? Value : never,
>(opt: Opt): maybe<Value> {
  if (isJust<maybe<Value>>(opt)) return opt.value;
  return nothing;
}
