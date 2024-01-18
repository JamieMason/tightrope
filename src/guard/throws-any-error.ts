import type { AnyFn } from '../fn/types.js';
import { isFunction } from './is-function.js';

/**
 * Asserts that a value is a `Function` which throws when invoked.
 *
 * @tags guard, functions, errors
 */
export const throwsAnyError = <T extends AnyFn = AnyFn>(
  value: T,
): value is T => {
  try {
    if (!isFunction(value)) return false;
    value();
    return false;
  } catch (err) {
    return true;
  }
};
