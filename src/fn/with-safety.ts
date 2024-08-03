import { Err } from '../result/result.js';
import type { AnyFn } from './index.js';

/** Catch errors in user code in Result operators, and instead return `Err` instances. */
export function withSafety<T extends AnyFn>(fn: T): T {
  return ((...args) => {
    try {
      return fn(...args);
    } catch (err) {
      return new Err(err);
    }
  }) as T;
}
