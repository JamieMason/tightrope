import { curry } from '../fn/lib/curry.js';
import { isNumber } from '../number/is-number.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateOnDayOfWeek = {
  (index: number): (value: unknown) => value is ValidDate;
  (index: number, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring on the day of the week with the given index, where Sunday is
 * `0` and Saturday is `6`.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnDayOfWeek: IsDateOnDayOfWeek = curry(
  (index: number, value: unknown): value is ValidDate =>
    isValidDate(value) && isNumber(index) && value.getDay() === index,
  2,
);
