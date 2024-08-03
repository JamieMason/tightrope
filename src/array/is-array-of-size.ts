import { curry } from '../fn/lib/curry.js';
import { isArray } from './is-array.js';

type IsArrayOfSize = {
  (
    size: number,
  ): (
    value: unknown,
  ) => value is typeof value extends Array<infer V>
    ? unknown extends V
      ? unknown[]
      : V[]
    : unknown[];
  (
    size: number,
    value: unknown,
  ): value is typeof value extends Array<infer V>
    ? unknown extends V
      ? unknown[]
      : V[]
    : unknown[];
};

/**
 * Asserts that a value is an `Array` containing a specific number of values.
 *
 * @tags guard, arrays, array-length
 */
export const isArrayOfSize: IsArrayOfSize = curry(
  (
    size: number,
    value: unknown,
  ): value is typeof value extends Array<infer V>
    ? unknown extends V
      ? unknown[]
      : V[]
    : unknown[] => isArray(value) && value.length === size,
  2,
);
