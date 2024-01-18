import type { AnyRecord } from '../fn/types.js';
import { hasType } from './has-type.js';

/**
 * Asserts that a value is an `Object`.
 *
 * @tags guard, objects
 */
export function isObject<T extends AnyRecord>(value: unknown): value is T {
  return hasType<T>('Object', value);
}
