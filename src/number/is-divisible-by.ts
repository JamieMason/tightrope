import { curry } from '../fn/lib/curry.js';
import { isNumber } from './is-number.js';

type IsDivisibleBy = {
  (other: number): (value: unknown) => value is number;
  (other: number, value: unknown): value is number;
};

/**
 * Asserts that a value is a `Number` which results in a whole number when divided by another.
 *
 * @tags guard, numbers
 */
export const isDivisibleBy: IsDivisibleBy = curry(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value % other === 0,
  2,
);
