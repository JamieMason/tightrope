import { curry } from '../fn/lib/curry.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsAfter = {
  (otherDate: ValidDate): (date: unknown) => date is ValidDate;
  (otherDate: ValidDate, date: unknown): date is ValidDate;
};

/**
 * Asserts that a value is a valid instance of `Date` whose value occurs after that of another.
 *
 * @tags guard, dates, comparator
 */
export const isAfter: IsAfter = curry(
  (otherDate: ValidDate, date: unknown): date is ValidDate =>
    isValidDate(date) &&
    isValidDate(otherDate) &&
    date.getTime() > otherDate.getTime(),
  2,
);
