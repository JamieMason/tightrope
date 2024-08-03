import { hasType } from '../guard/has-type.js';
import type { AnyRecord } from './index.js';

/**
 * Asserts that a value is an `Object`.
 *
 * @tags guard, objects
 */
export function isObject<T extends AnyRecord>(value: unknown): value is T {
  return hasType('Object', value);
}
