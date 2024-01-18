import { every } from './every.js';
import { isString } from './is-string.js';

/**
 * Asserts that a value is an `Array` containing only `String` values.
 *
 * @tags guard, arrays, strings
 */
export const isArrayOfStrings = (value: unknown): value is string[] =>
  every(isString, value);
