import { isObject } from '../object/is-object.js';
import type { Option } from './option.js';

/**
 * Returns true if the given value is a `None` instance, false otherwise.
 *
 * @tags option, guard, errors
 */
export function isNone(value: unknown): value is Option<never> {
  return isObject(value) && value._tag === 'None';
}
