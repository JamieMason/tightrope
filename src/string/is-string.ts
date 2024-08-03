/**
 * Asserts that a value is a `String` or `new String()`.
 *
 * @tags guard, strings
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string' || value instanceof String;
