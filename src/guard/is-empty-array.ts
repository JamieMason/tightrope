import { isArrayOfSize } from './is-array-of-size.js';

/**
 * Asserts that a value is a valid `Array` containing no items.
 *
 * @tags guard, arrays, array-length, emptiness
 */
export const isEmptyArray = <T extends [] = []>(value: unknown): value is T =>
  isArrayOfSize(0, value);
