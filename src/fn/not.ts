import type { AnyGuard } from './types';

/**
 * A higher order function which returns the opposite boolean value to the original function when called.
 *
 * @tags functions, guard, truthiness, booleans
 */
export function not<Fn extends AnyGuard>(fn: Fn) {
  return (...args: Parameters<Fn>): boolean => {
    return !fn(...args);
  };
}
