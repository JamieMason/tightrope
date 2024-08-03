/**
 * Asserts that a value is `null`.
 *
 * @tags guard, truthiness
 */
export const isNull = (value: unknown): value is null => value === null;
