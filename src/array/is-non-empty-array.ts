import { isArray } from './is-array.js';

/**
 * Asserts that a value is an `Array` containing at least one value.
 *
 * @tags guard, arrays, emptiness
 */
export const isNonEmptyArray = <T extends any[] = any[]>(
  value: unknown,
): value is T => isArray(value) && value.length > 0;
