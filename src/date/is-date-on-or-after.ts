import { curry } from '../fn/lib/curry.js';
import { isGreaterThanOrEqualTo } from '../number/is-greater-than-or-equal-to.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateOnOrAfter = {
  (other: unknown): (value: unknown) => value is ValidDate;
  (other: unknown, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnOrAfter: IsDateOnOrAfter = curry(
  (other: unknown, value: unknown): value is ValidDate =>
    isValidDate(value) &&
    isValidDate(other) &&
    isGreaterThanOrEqualTo(other.getTime(), value.getTime()),
  2,
);
