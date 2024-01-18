import { isString } from './is-string.js';

/**
 * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
 *
 * @tags guard, strings
 */
export const isVisibleString = (value: unknown): value is string =>
  isString(value) && value.length > 0 && value.search(/\S/) !== -1;
