import { isArrayOf } from './is-array-of';
import { isObject } from './is-object';

/**
 * Asserts that a value is an `Array` containing only `Object` values.
 *
 * ## Examples
 *
 * ```ts
 * isArrayOfObjects([{}, new Object()]);
 * ```
 *
 * @tags guard, arrays, objects
 */
export const isArrayOfObjects = isArrayOf(isObject);
