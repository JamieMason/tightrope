import { curry } from '../fn/curry';
import { isDate } from './is-date';
import { isNumber } from './is-number';

type IsDateInMonth = {
  (index: number): { (value: unknown): boolean };
  (index: number, value: unknown): boolean;
};

/**
 * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and
 * December is `11`.
 *
 * @tags guard, dates, comparator
 */
export const isDateInMonth: IsDateInMonth = curry(
  (index: number, value: unknown): value is Date =>
    isDate(value) && isNumber(index) && value.getMonth() === index,
  2,
);
