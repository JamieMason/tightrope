export type Nil = undefined | null;

/**
 * Asserts that a value is `null` or `undefined`
 *
 * @tags guard, truthiness
 */
export const isNil = (value: unknown): value is Nil =>
  value === null || value === undefined;
