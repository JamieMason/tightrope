import { isObject } from './is-object.js';

/**
 * Asserts that a value is a valid `Object` containing no instance members.
 *
 * @tags guard, objects, emptiness
 */
export const isEmptyObject = <T extends Record<string, unknown>>(
  value: unknown,
): value is T => isObject(value) && Object.keys(value).length === 0;
