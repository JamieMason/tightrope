import { curry } from '../fn/lib/curry.js';
import { isNumber } from './is-number.js';

type IsLessThan = {
  (other: number): (value: unknown) => value is number;
  (other: number, value: unknown): value is number;
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
