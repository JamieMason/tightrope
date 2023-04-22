import { curry } from '../fn/curry';
import { isDate } from './is-date';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';

type IsDateBetween = {
  (floor: Date, ceiling: Date, date: Date): boolean;
  (floor: Date, ceiling: Date): { (date: Date): boolean };
  (floor: Date): {
    (ceiling: Date): { (date: Date): boolean };
    (ceiling: Date, date: Date): boolean;
  };
};

/**
 * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
 *
 * @tags guard, dates, comparator
 */
export const isDateBetween: IsDateBetween = curry(
  (floor: Date, ceiling: Date, date: Date): date is Date =>
    isDate(date) &&
    isDate(floor) &&
    isDate(ceiling) &&
    isLessThanOrEqualTo(ceiling.getTime(), date.getTime()) &&
    isGreaterThanOrEqualTo(floor.getTime(), date.getTime()),
  3,
);
