import { curry } from '../fn/curry.js';
import { isDate } from './is-date.js';
import { isNumber } from './is-number.js';

type IsDateOnDayOfMonth = {
  (dayOfMonth: number): (value: unknown) => boolean;
  (dayOfMonth: number, value: unknown): boolean;
};

/**
 * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the
 * month is `1` and last is `31`.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnDayOfMonth: IsDateOnDayOfMonth = curry(
  (dayOfMonth: number, value: unknown): value is Date =>
    isDate(value) && isNumber(dayOfMonth) && value.getDate() === dayOfMonth,
  2,
);
