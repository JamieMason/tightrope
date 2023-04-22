import { curry } from '../fn/curry';
import { isDate } from './is-date';

type IsAfter = {
  (otherDate: Date): { (date: Date): boolean };
  (otherDate: Date, date: Date): boolean;
};

/**
 * Asserts that a value is a valid instance of `Date` whose value occurs after that of another.
 *
 * @tags guard, dates, comparator
 */
export const isAfter: IsAfter = curry(
  (otherDate: Date, date: Date): date is Date =>
    isDate(date) && isDate(otherDate) && date.getTime() > otherDate.getTime(),
  2,
);
