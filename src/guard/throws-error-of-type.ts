import { curry } from '../fn/curry';
import type { AnyFn } from '../fn/types';
import { hasType } from './has-type';
import { isFunction } from './is-function';

type ThrowsErrorOfType = {
  (typeName: string): { (value: AnyFn): boolean };
  (typeName: string, value: AnyFn): boolean;
};

/**
 * Asserts that a value is a `Function` which throws an `Error` of the given type.
 *
 * @tags guard, functions, errors
 */
export const throwsErrorOfType: ThrowsErrorOfType = curry<AnyFn>(
  (typeName: string, value: AnyFn): value is AnyFn => {
    try {
      if (!isFunction(value)) return false;
      value();
      return false;
    } catch (err) {
      return hasType(typeName, err);
    }
  },
  2,
);
