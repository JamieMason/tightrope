import { curry } from '../fn/curry';
import { isNonEmptyArray } from './is-non-empty-array';

type Every = {
  <Fn extends (value: any) => value is any>(
    guard: Fn,
  ): {
    (
      value: unknown,
    ): value is Fn extends (value: any) => value is infer T
      ? Array<T>
      : unknown[];
  };
  <Fn extends (value: any) => value is any>(
    guard: Fn,
    value: unknown,
  ): value is Fn extends (value: any) => value is infer T
    ? Array<T>
    : unknown[];
};

/**
 * Return true if `value` is a non-empty array and every member passes the given guard.
 *
 * ## Examples
 *
 * ```ts
 * import { every } from 'tightrope/guard/every';
 * import { isPositiveNumber } from 'tightrope/guard/is-positive-number';
 *
 * const numbers = [1, 2, 3, 4, 5];
 * const isArrayOfPositiveNumbers = every(isPositiveNumber);
 *
 * isArrayOfPositiveNumbers(numbers); // true
 * ```
 *
 * @tags guard, multiple-conditions
 */
export const every = curry(
  <Fn extends (value: any) => value is any>(
    guard: Fn,
    value: unknown,
  ): value is Fn extends (value: any) => value is infer T
    ? Array<T>
    : unknown[] => isNonEmptyArray(value) && value.every(guard),
  2,
) as Every;
