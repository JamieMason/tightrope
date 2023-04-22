import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';
import { isNonEmptyArray } from './is-non-empty-array';

export type Some = {
  <A extends any[]>(guard: UnaryGuard): { (array: A): boolean };
  <A extends any[]>(guard: UnaryGuard, array: A): boolean;
};

/**
 * Returns true if array is not empty and any member of the array passes the guard
 *
 * @tags guard
 */
export const some: Some = curry(
  <A extends any[]>(guard: UnaryGuard, array: A): boolean =>
    isNonEmptyArray(array) && array.some(guard),
  2,
);
