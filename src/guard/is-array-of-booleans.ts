import { isArrayOf } from './is-array-of';
import { isBoolean } from './is-boolean';

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
