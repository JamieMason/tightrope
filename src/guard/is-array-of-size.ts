import { curry } from '../fn/curry.js';
import { isArray } from './is-array.js';

type IsArrayOfSize = {
  (size: number): { (value: unknown): boolean };
  (size: number, value: unknown): boolean;
};

/**
 * Asserts that a value is an `Array` containing a specific number of values.
 *
 * @tags guard, arrays, array-length
 */
export const isArrayOfSize: IsArrayOfSize = curry(
  (size: number, value: unknown): boolean =>
    isArray(value) && value.length === size,
  2,
);
