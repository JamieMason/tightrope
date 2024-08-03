import type { AnyFn } from './index.js';

/**
 * Asserts that a value is a `Function`.
 *
 * @tags guard, functions
 */
export const isFunction = <T extends AnyFn>(value: T | unknown): value is T =>
  typeof value === 'function';
