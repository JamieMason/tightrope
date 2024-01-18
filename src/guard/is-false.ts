import { isBoolean } from './is-boolean.js';

/**
 * Asserts that a value is `false` or `new Boolean(false)`.
 *
 * @tags guard, booleans
 */
export const isFalse = (value: unknown): value is false =>
  value === false || (isBoolean(value) && value.valueOf() === false);
