import type { Maybe } from '.';
import { nothing } from '.';
import type { AnyOption } from '../fn/types';
import { isJust } from './is-just';

/**
 * Removes one level of nesting from an `Maybe<Maybe<T>>`
 *
 * @tags maybe, transform, transform-maybe
 */
export function flatten<
  Opt extends Maybe<AnyOption>,
  Value = Opt extends Maybe<Maybe<infer Value>> ? Value : never,
>(opt: Opt): Maybe<Value> {
  if (isJust<Maybe<Value>>(opt)) return opt.value;
  return nothing;
}
