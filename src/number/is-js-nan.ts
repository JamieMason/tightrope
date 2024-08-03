import type { Brand } from 'ts-brand';

export type JsNaN = Brand<unknown, 'JsNaN'>;

/**
 * Asserts that a value is `NaN`.
 *
 * @tags guard, numbers
 */
export function isJsNaN(value: unknown): value is JsNaN {
  return Number.isNaN(value);
}
