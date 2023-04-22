import { isString } from './is-string';

/**
 * Asserts that a value is a `String` containing only whitespace characters.
 *
 * @tags guard, strings
 */
export const isWhitespace = (value: unknown): value is string =>
  isString(value) && value.search(/\S/) === -1;
