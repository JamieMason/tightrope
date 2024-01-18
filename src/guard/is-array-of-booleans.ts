import { isArrayOf } from './is-array-of.js';
import { isBoolean } from './is-boolean.js';

/**
 * Asserts that a value is an `Array` containing only `Boolean` values.
 *
 * ## Examples
 *
 * ```ts
 * isArrayOfBooleans([true, false, new Boolean(true)]);
 * ```
 *
 * @tags guard, arrays, booleans
 */
export const isArrayOfBooleans = isArrayOf(isBoolean);
