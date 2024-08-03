/**
 * Asserts that a value is an instance of `Date`.
 *
 * @tags guard, dates
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;
