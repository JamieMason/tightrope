import { isBoolean } from './is-boolean';

/**
 * Asserts that a value is `false` or `new Boolean(false)`.
 *
 * @tags guard, booleans
 */
export const isFalse = (value: unknown): value is false =>
  value === false || (isBoolean(value) && value.valueOf() === false);
