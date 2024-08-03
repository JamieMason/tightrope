import { curry } from '../fn/curry.js';
import { isDate } from './is-date.js';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to.js';

type IsDateOnOrBefore = {
  (other: unknown): (value: unknown) => boolean;
  (other: unknown, value: unknown): boolean;
};

/**
 * Asserts that a value is an instance of `Date` occurring on or before the exact date and time of another.
 *
 * @tags guard, dates, comparator
 */
export const isDateOnOrBefore: IsDateOnOrBefore = curry(
  (other: unknown, value: unknown): value is Date =>
    isDate(value) &&
    isDate(other) &&
    isLessThanOrEqualTo(other.getTime(), value.getTime()),
  2,
);
