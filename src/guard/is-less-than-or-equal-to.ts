import { curry } from '../fn/curry.js';
import { isNumber } from './is-number.js';

type IsLessThanOrEqualTo = {
  (other: number): { (value: unknown): boolean };
  (other: number, value: unknown): boolean;
};

/**
 * Asserts that a value is less than or equal to another.
 *
 * @tags guard, numbers, comparator
 */
export const isLessThanOrEqualTo: IsLessThanOrEqualTo = curry(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value <= other,
  2,
);
