import type { Brand } from 'ts-brand';

export type Truthy = Brand<unknown, 'Truthy'>;

/**
 * Asserts that a value is not falsy.
 *
 * @tags guard, truthiness
 */
export function isTruthy(value: unknown): value is Truthy {
  return !!value;
}
