import { isNull } from '../object/is-null.js';
import { isUndefined } from './is-undefined.js';

/**
 * Asserts that a value is safe to attempt to read property values from.
 *
 * Only `null` and `undefined` will error if you try to read a property on them using dot notation.
 *
 * ## Example
 *
 * @tags guard, objects, arrays
 */
export function isReadable(value: unknown): value is object {
  return !(isNull(value) || isUndefined(value));
}
