import { curry } from '../fn/lib/curry.js';
import { isNumber } from '../number/is-number.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateInYear = {
  (year: number): (value: unknown) => value is ValidDate;
  (year: number, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring in the given year.
 *
 * @tags guard, dates, comparator
 */
export const isDateInYear: IsDateInYear = curry(
  (year: number, value: unknown): value is ValidDate =>
    isValidDate(value) && isNumber(year) && value.getFullYear() === year,
  2,
);
