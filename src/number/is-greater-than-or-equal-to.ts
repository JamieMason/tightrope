import { curry } from '../fn/lib/curry.js';
import { isNumber } from './is-number.js';

type IsGreaterThanOrEqualTo = {
  (other: number): (value: unknown) => value is number;
  (other: number, value: unknown): value is number;
};

/**
 * Asserts that a value is greater than or equal to other.
 *
 * @tags guard, numbers, comparator
 */
export const isGreaterThanOrEqualTo: IsGreaterThanOrEqualTo = curry(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value >= other,
  2,
);
