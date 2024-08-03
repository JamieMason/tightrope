import type { Option } from './option.js';
import { Some } from './option.js';

/**
 * Determine whether a value is an instance of `Some`.
 *
 * @tags option, guard
 */
export function isSome<Opt extends Option.Any>(
  value: Opt | unknown,
): value is Some<Option.Type<Opt>> {
  return value instanceof Some && value._tag === 'Some';
}
