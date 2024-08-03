import { curry } from '../fn/lib/curry.js';
import { isNumber } from '../number/is-number.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateOnDayOfMonth = {
  (dayOfMonth: number): (value: unknown) => value is ValidDate;
  (dayOfMonth: number, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the
 * month is `1` and last is `31`.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnDayOfMonth: IsDateOnDayOfMonth = curry(
  (dayOfMonth: number, value: unknown): value is ValidDate =>
    isValidDate(value) &&
    isNumber(dayOfMonth) &&
    value.getDate() === dayOfMonth,
  2,
);
