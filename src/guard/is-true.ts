import { isBoolean } from './is-boolean.js';

/**
 * Asserts that a value is `true` or `new Boolean(true)`.
 *
 * @tags guard, booleans
 */
export const isTrue = (value: unknown): value is true =>
  value === true || (isBoolean(value) && value.valueOf() === true);
