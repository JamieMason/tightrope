import type { AnyFn } from '../fn/types.js';

/**
 * Asserts that a value is a `Function`.
 *
 * @tags guard, functions
 */
export const isFunction = <T extends AnyFn = AnyFn>(
  value: unknown,
): value is T => typeof value === 'function';
