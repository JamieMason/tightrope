import { isString } from './is-string.js';

/**
 * Asserts that a value is a valid `String` containing at least one character.
 *
 * @tags guard, strings, emptiness, truthiness
 */
export const isNonEmptyString = (value: unknown): value is string =>
  isString(value) && value.length > 0;
