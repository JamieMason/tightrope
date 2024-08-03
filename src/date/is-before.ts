import { curry } from '../fn/lib/curry.js';
import { isAfter } from './is-after.js';
import { type ValidDate, isValidDate } from './is-valid-date.js';

type IsBefore = {
  (other: ValidDate): (value: unknown) => value is ValidDate;
  (other: ValidDate, value: unknown): value is ValidDate;
};

/**
 * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
 *
 * @tags guard, dates, comparator
 */
export const isBefore: IsBefore = curry(
  (other: ValidDate, value: unknown): value is ValidDate =>
    isValidDate(value) && isAfter(value, other),
  2,
);
