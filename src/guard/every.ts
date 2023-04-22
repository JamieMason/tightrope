import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';
import { isNonEmptyArray } from './is-non-empty-array';

type Every = {
  (guard: UnaryGuard): { (value: unknown): boolean };
  (guard: UnaryGuard, value: unknown): boolean;
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
export const every: Every = curry(
  (guard: UnaryGuard, value: unknown): boolean =>
    isNonEmptyArray(value) && value.every(guard),
  2,
);
