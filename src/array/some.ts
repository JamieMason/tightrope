import { curry } from '../fn/lib/curry.js';
import { isNonEmptyArray } from './is-non-empty-array.js';

type Some = {
  <Fn extends (value: any) => value is any>(
    guard: Fn,
  ): (
    array: unknown,
  ) => array is Fn extends (value: any) => value is infer T ? T[] : unknown[];
  <Fn extends (value: any) => value is any>(
    guard: Fn,
    array: unknown,
  ): array is Fn extends (value: any) => value is infer T ? T[] : unknown[];
};

/**
 * Returns true if array is not empty and any member of the array passes the guard
 *
 * @tags guard
 */
export const some: Some = curry(
  <Fn extends (value: any) => value is any>(
    guard: Fn,
    array: unknown,
  ): array is Fn extends (value: any) => value is infer T ? T[] : unknown[] =>
    isNonEmptyArray(array) && array.some(guard),
  2,
);
