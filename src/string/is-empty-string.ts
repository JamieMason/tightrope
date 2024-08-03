import { isString } from './is-string.js';

/**
 * Asserts that a value is a valid `String` containing no characters.
 *
 * @tags guard, strings, string-length, emptiness, truthiness
 */
export const isEmptyString = (value: unknown): value is '' =>
  isString(value) && value.length === 0;
