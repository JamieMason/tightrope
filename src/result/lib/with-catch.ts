import { Err } from '..';
import type { AnyFn } from '../../fn/types';

/** Catch errors in user code in Result operators, and instead return `Err` instances. */
export function withCatch<T extends AnyFn>(fn: T): T {
  return ((...args) => {
    try {
      return fn(...args);
    } catch (err) {
      return new Err(err);
    }
  }) as T;
}
