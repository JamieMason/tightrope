import { isSome } from './is-some.js';
import type { Option } from './option.js';

/**
 * Extract value from a `Some` or throw on a `None`.
 *
 * @tags option, unwrap, right-biased, unsafe
 */
export function unwrap<Opt extends Option.Any>(option: Opt): Option.Type<Opt> {
  if (isSome(option)) return option.value;
  throw new Error('Called `unwrap()` on a `None` value');
}
