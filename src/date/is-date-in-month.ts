import { curry } from '../fn/lib/curry.js';
import { isNumber } from '../number/is-number.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateInMonth = {
  (index: number): (value: unknown) => value is ValidDate;
  (index: number, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and
 * December is `11`.
 *
 * @tags guard, dates, comparator
 */
export const isDateInMonth: IsDateInMonth = curry(
  (index: number, value: unknown): value is ValidDate =>
    isValidDate(value) && isNumber(index) && value.getMonth() === index,
  2,
);
