import { isString } from '../string/is-string.js';
import { isArrayOf } from './is-array-of.js';

/**
 * Asserts that a value is an `Array` containing only `String` values.
 *
 * @tags guard, arrays, strings
 */
export const isArrayOfStrings = isArrayOf(isString);
