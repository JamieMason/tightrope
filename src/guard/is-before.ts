import { curry } from '../fn/curry.js';
import { isAfter } from './is-after.js';

type IsBefore = {
  (other: Date): { (value: Date): boolean };
  (other: Date, value: Date): boolean;
};

/**
 * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
 *
 * @tags guard, dates, comparator
 */
export const isBefore: IsBefore = curry(
  (other: Date, value: Date): value is Date => isAfter(value, other),
  2,
);
