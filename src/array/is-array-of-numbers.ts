import { isNumber } from '../number/is-number.js';
import { isArrayOf } from './is-array-of.js';

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
