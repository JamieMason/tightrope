import { isArrayOf } from './is-array-of.js';
import { isObject } from './is-object.js';

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
