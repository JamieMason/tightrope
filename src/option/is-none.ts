import type { None } from '.';
import { isObject } from '../guard/is-object';

/**
 * Returns true if the given value is a `None` instance, false otherwise.
 *
 * ## Example
 *
 * ```ts
 * import { isNone } from 'tightrope/option/is-none';
 * import { none } from 'tightrope/option';
 * import { Some } from 'tightrope/option';
 *
 * isNone(none); // true
 * isNone(new Some(1)); // false
 * isNone(null); // false
 * ```
 *
 * @param value - The value to check.
 * @returns A boolean indicating whether the given value is a `None` instance.
 * @tags option, guard, errors
 */
export function isNone(value: unknown): value is None {
  return isObject(value) && value._tag === 'None';
}
