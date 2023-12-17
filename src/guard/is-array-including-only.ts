import { curry } from '../fn/curry';
import { every } from './every';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

export type IsArrayIncludingOnly = {
  <T extends any[]>(allowedValues: T): { (value: unknown): value is T };
  <T extends any[]>(allowedValues: T, value: unknown): value is T;
};

/**
 * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no
 * others. The order and number of times each value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingOnly = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isArray(allowedValues) &&
    isArray(value) &&
    every(
      (member): member is T[number] => some(isJestEqual(member), allowedValues),
      value,
    ),
  2,
) as IsArrayIncludingOnly;
