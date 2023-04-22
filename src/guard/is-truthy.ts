/**
 * Asserts that a value is not "", 0, null, or false.
 *
 * @tags guard, truthiness
 */
export function isTruthy(value: unknown): boolean {
  return !!value;
}
