import { curry } from '../fn/lib/curry.js';
import { isGreaterThanOrEqualTo } from '../number/is-greater-than-or-equal-to.js';
import { isLessThanOrEqualTo } from '../number/is-less-than-or-equal-to.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsDateBetween = {
  (floor: ValidDate, ceiling: ValidDate, date: unknown): date is ValidDate;
  (floor: ValidDate, ceiling: ValidDate): (date: unknown) => date is ValidDate;
  (
    floor: ValidDate,
  ): {
    (ceiling: ValidDate): (date: unknown) => date is ValidDate;
    (ceiling: ValidDate, date: unknown): date is ValidDate;
  };
};

/**
 * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
 *
 * @tags guard, dates, comparator
 */
export const isDateBetween: IsDateBetween = curry(
  (floor: ValidDate, ceiling: ValidDate, date: unknown): date is ValidDate =>
    isValidDate(date) &&
    isValidDate(floor) &&
    isValidDate(ceiling) &&
    isLessThanOrEqualTo(ceiling.getTime(), date.getTime()) &&
    isGreaterThanOrEqualTo(floor.getTime(), date.getTime()),
  3,
);
