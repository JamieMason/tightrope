import { curry } from '../fn/curry';
import { isDate } from './is-date';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';

type IsDateOnOrAfter = {
  (other: unknown): { (value: unknown): boolean };
  (other: unknown, value: unknown): boolean;
};

/**
 * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnOrAfter: IsDateOnOrAfter = curry(
  (other: unknown, value: unknown): value is Date =>
    isDate(value) &&
    isDate(other) &&
    isGreaterThanOrEqualTo(other.getTime(), value.getTime()),
  2,
);
