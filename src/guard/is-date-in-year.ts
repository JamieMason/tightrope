import { curry } from '../fn/curry';
import { isDate } from './is-date';
import { isNumber } from './is-number';

type IsDateInYear = {
  (year: number): { (value: unknown): boolean };
  (year: number, value: unknown): boolean;
};

/**
 * Asserts that a value is an instance of `Date` occurring in the given year.
 *
 * @tags guard, dates, comparator
 */
export const isDateInYear: IsDateInYear = curry(
  (year: number, value: unknown): value is Date =>
    isDate(value) && isNumber(year) && value.getFullYear() === year,
  2,
);
