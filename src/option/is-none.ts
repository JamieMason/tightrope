import type { None } from '.';
import { isObject } from '../guard/is-object';

/**
 * Returns true if the given value is a `None` instance, false otherwise.
 *
 * @tags option, guard, errors
 */
export function isNone(value: unknown): value is None {
  return isObject(value) && value._tag === 'None';
}
