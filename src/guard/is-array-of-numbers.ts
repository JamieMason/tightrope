import { isArrayOf } from './is-array-of';
import { isNumber } from './is-number';

/**
 * Asserts that a value is an `Array` containing only `Number` values.
 *
 * ## Examples
 *
 * ```ts
 * isArrayOfNumbers([12, 0, 14]);
 * ```
 *
 * @tags guard, arrays, numbers
 */
export const isArrayOfNumbers = isArrayOf(isNumber);
