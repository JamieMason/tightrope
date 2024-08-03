import { isObject } from './is-object.js';

/**
 * Asserts that a value is an `Object` containing at least one own member.
 *
 * @tags guard, objects, emptiness
 */
export function isNonEmptyObject<
  V,
  K extends string | number | symbol = string,
>(value: unknown): value is Record<K, V> {
  return isObject(value) && Object.keys(value).length > 0;
}
