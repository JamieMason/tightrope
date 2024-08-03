import { curry } from '../fn/lib/curry.js';
import { hasType } from '../guard/has-type.js';
import type { AnyFn } from './index.js';
import { isFunction } from './is-function.js';

type ThrowsErrorOfType = {
  <Fn extends AnyFn>(
    typeName: string,
  ): (value: Fn | unknown) => value is Fn extends AnyFn ? Fn : AnyFn;
  <Fn extends AnyFn>(
    typeName: string,
    value: Fn | unknown,
  ): value is Fn extends AnyFn ? Fn : AnyFn;
};

/**
 * Asserts that a value is a `Function` which throws an `Error` of the given type.
 *
 * @tags guard, functions, errors
 */
export const throwsErrorOfType: ThrowsErrorOfType = curry(
  <Fn extends AnyFn>(
    typeName: string,
    value: Fn | unknown,
  ): value is Fn extends AnyFn ? Fn : AnyFn => {
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
