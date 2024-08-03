import { curry } from '../fn/curry.js';
import { every } from './every.js';
import { isArray } from './is-array.js';
import { isJestEqual } from './is-jest-equal.js';
import { some } from './some.js';

export type IsArrayIncludingOnly = {
  <T extends any[]>(allowedValues: T): (value: unknown) => value is T;
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
