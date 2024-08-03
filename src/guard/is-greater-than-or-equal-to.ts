import { curry } from '../fn/curry.js';
import { isNumber } from './is-number.js';

type IsGreaterThanOrEqualTo = {
  (other: number): (value: unknown) => boolean;
  (other: number, value: unknown): boolean;
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
