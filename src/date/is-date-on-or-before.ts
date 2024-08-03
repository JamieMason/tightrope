import { curry } from '../fn/lib/curry.js';
import { isLessThanOrEqualTo } from '../number/is-less-than-or-equal-to.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateOnOrBefore = {
  (other: unknown): (value: unknown) => value is ValidDate;
  (other: unknown, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is an instance of `Date` occurring on or before the exact date and time of another.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnOrBefore: IsDateOnOrBefore = curry(
  (other: unknown, value: unknown): value is ValidDate =>
    isValidDate(value) &&
    isValidDate(other) &&
    isLessThanOrEqualTo(other.getTime(), value.getTime()),
  2,
);
