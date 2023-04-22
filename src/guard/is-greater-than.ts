import { curry } from '../fn/curry';
import { isNumber } from './is-number';

type IsGreaterThan = {
  (other: number): { (value: unknown): boolean };
  (other: number, value: unknown): boolean;
};

/**
 * Asserts that a value is greater than another.
 *
 * @tags guard, numbers, comparator
 */
export const isGreaterThan: IsGreaterThan = curry(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value > other,
  2,
);
