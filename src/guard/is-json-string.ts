import { isCalculable } from './is-calculable.js';
import { isString } from './is-string.js';

/**
 * Asserts that a value is a `String` of valid JSON.
 *
 * @tags guard, strings, JSON
 */
export const isJsonString = (value: unknown): value is string => {
  try {
    return (
      value === 'null' ||
      (isString(value) && (isCalculable(value) || JSON.parse(value) !== null))
    );
  } catch (err) {
    return false;
  }
};
