import type { AnyFn } from './index.js';
import { isFunction } from './is-function.js';

/**
 * Asserts that a value is a `Function` which throws when invoked.
 *
 * @tags guard, functions, errors
 */
export const throwsAnyError = <Fn extends AnyFn>(value: Fn): value is Fn => {
  try {
    if (!isFunction(value)) return false;
    value();
    return false;
  } catch (_err) {
    return true;
  }
};
