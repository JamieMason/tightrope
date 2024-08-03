import type { JsNaN } from '../number/is-js-nan.js';

export type Falsy = false | null | 0 | '' | undefined | JsNaN;

/**
 * Asserts that a value is "", 0, null, false, or NaN.
 *
 * @tags guard, truthiness
 */
export function isFalsy(value: unknown): value is Falsy {
  return !!value === false;
}
