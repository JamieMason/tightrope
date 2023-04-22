import { curry } from '../fn/curry';
import { isNumber } from './is-number';

type IsLessThan = {
  (other: number): { (value: unknown): boolean };
  (other: number, value: unknown): boolean;
};

/**
 * Asserts that a value is less than another.
 *
 * @tags guard, numbers, comparator
 */
export const isLessThan: IsLessThan = curry(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value < other,
  2,
);
